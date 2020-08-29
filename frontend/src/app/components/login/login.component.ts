import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  public busy = false;
  public auth2: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private zone: NgZone
  ) {
    if (userService.isLoggedIn()) {
      router.navigateByUrl('/');
    }
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  login(data): void {
    this.busy = true;
    this.userService.login(data).subscribe((res: any) => {
      this.zone.run(() => this.router.navigate(['/']));
    }, () => {
      this.busy = false;
    });
  }

  public googleInit(): void {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '737715185635-6r9bbcbsa2d1hm4ok049iugrqjop6odb.apps.googleusercontent.com',
        scope: 'profile email https://www.googleapis.com/auth/contacts.readonly',
        redirect_uri: 'http://localhost:3000/google/callback'
      });
      this.attachSignIn(document.getElementById('googleBtn'));
    });
  }

  public attachSignIn(element): void {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const data = googleUser.getAuthResponse();
        this.login({
          idToken: data.id_token,
          accessToken: data.access_token
        });
      }, (error) => {
    });
  }

}
