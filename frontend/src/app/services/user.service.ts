import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  private api = '/api/v1';

  constructor(
    private http: HttpClient
  ) {

  }

  register(user: any): Observable<any> {
    const endpoint = this.api + '/register';
    return this.http.post(endpoint, user);
  }

  login(data: any): Observable<any> {
    const endpoint = `${this.api}/login`;
    return this.http.post(endpoint, data)
    .pipe(tap((res: any) => localStorage.setItem('user', JSON.stringify({
      user: res.user,
      token: res.token
    }))));
  }

  isLoggedIn(): boolean {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.token) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  getAuthUrl(): Observable<any> {
    const endpoint = `${this.api}/authurl`;
    return this.http.get(endpoint);
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  get user(): any {
    try {
      return JSON.parse(localStorage.getItem('user')).user;
    } catch (e) {
      return {};
    }
  }

  get token(): string {
    try {
        return JSON.parse(localStorage.getItem('user')).token;
    } catch (e) {
        return '';
    }
  }
}
