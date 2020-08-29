import { Component, OnDestroy, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GoogleService } from 'src/app/services/googleService';

declare const gapi: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnDestroy {

  public me: any;
  private subs = new Subscription();
  public contacts = [];

  constructor(
    public userService: UserService,
    private router: Router,
    private zone: NgZone,
    private googleService: GoogleService
  ) {
    this.me = this.userService.user;
    this.loadContacts();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logoutUser = () => {
    this.userService.logout();
    this.zone.run(() => this.router.navigateByUrl('/login'));
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

  loadContacts(): void {
    this.googleService.loadContacts().subscribe((res) => {
      this.contacts = res.contacts;
      console.log(this.contacts);
    });
  }
}
