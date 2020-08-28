import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {

  public me: any;
  private subs = new Subscription();

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.me = this.userService.user;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logoutUser = () => {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

  logout(): void {
    gapi.load('auth2', () => {
      const auth2 = gapi.auth2.getAuthInstance();
      if (auth2 != null) {
        auth2.signOut().then(this.logoutUser);
      } else {
        this.logoutUser();
      }
    });
  }
}
