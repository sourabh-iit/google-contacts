import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class GoogleService {

  private api = '/api/v1';

  constructor(
    private http: HttpClient
  ) {

  }

  loadContacts(): Observable<any> {
    const endPoint = `${this.api}/google/contacts`;
    return this.http.get(endPoint);
  }

}
