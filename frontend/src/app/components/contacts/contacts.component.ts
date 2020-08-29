import { Component, OnDestroy, NgZone, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GoogleService } from 'src/app/services/googleService';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnDestroy, AfterViewInit {

  public me: any;
  private subs = new Subscription();
  public contacts = [];
  public totalContacts = 0;
  public nextPageToken = null;
  public busy = false;
  @ViewChild(NgScrollbar) scrollbarRef: NgScrollbar;

  constructor(
    public userService: UserService,
    private router: Router,
    private zone: NgZone,
    private googleService: GoogleService
  ) {
    this.me = this.userService.user;
    if (googleService.isExpired()) {
      this.logout();
    } else {
      this.loadContacts();
    }
  }

  ngAfterViewInit(): void {
    this.subs.add(this.scrollbarRef.scrolled.subscribe(e => {
      const pos = e.target.scrollTop + e.target.clientHeight;
      const max = e.target.scrollHeight;
      if (pos >= max) {
        this.loadContacts(this.nextPageToken);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logoutUser = () => {
    this.userService.logout();
    this.zone.run(() => this.router.navigateByUrl('/login'));
  }

  logout(): void {
    this.googleService.getAuthInstance().then((auth2) => {
      if (auth2 != null) {
        auth2.signOut().then(this.logoutUser);
      } else {
        this.logoutUser();
      }
    });
  }

  loadContacts(token = null): void {
    this.busy = true;
    this.googleService.loadContacts(token).subscribe((res) => {
      this.contacts = this.contacts.concat(res.contacts);
      this.totalContacts = res.totalItems;
      this.nextPageToken = res.nextPageToken;
      this.busy = false
    });
  }
}
