import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { GoogleService } from 'src/app/services/googleService';

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
    private zone: NgZone,
    private googleService: GoogleService
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
    this.googleService.getAuth().then((auth2) => {
      this.auth2 = auth2;
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
