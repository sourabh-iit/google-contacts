import { Component, OnInit, AfterViewInit } from '@angular/core';
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
    private router: Router
  ) {
    if (userService.isLoggedIn()) {
      router.navigateByUrl('/');
    }
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  login(token): void {
    this.busy = true;
    this.userService.login(token).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/']);
    }, () => {
      this.busy = false;
    });
  }

  public googleInit(): void {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '737715185635-6r9bbcbsa2d1hm4ok049iugrqjop6odb.apps.googleusercontent.com',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element): void {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        this.login(googleUser.getAuthResponse().id_token);
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

}
