import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

declare const gapi: any;


@Injectable()
export class GoogleService {

  private api = '/api/v1';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {

  }

  loadContacts(nextPageToken): Observable<any> {
    let endPoint = `${this.api}/google/contacts`;
    if (nextPageToken) {
      endPoint += `?nextPageToken=${nextPageToken}`;
    }
    return this.http.get(endPoint);
  }

  getAuth(): Promise<any> {
    return new Promise((res, rej) => {
      gapi.load('auth2', () => {
        const auth2 = gapi.auth2.init({
          client_id: '737715185635-6r9bbcbsa2d1hm4ok049iugrqjop6odb.apps.googleusercontent.com',
          scope: 'profile email https://www.googleapis.com/auth/contacts.readonly',
          redirect_uri: 'http://localhost:3000/google/callback'
        });
        res(auth2);
      });
    });
  }

  getAuthInstance(): Promise<any> {
    return new Promise((res, rej) => {
      gapi.load('auth2', () => {
        const auth2 = gapi.auth2.getAuthInstance();
        res(auth2);
      });
    });
  }

  isExpired(): boolean {
    const expiry = this.userService.user.expiry;
    const timenow = Date.now() / 1000;
    return expiry < timenow;
  }

}
