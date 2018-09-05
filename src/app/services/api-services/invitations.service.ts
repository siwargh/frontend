import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


import { apiUrl } from '../../app.config';
import { map } from 'rxjs/operators';
import 'rxjs' ;
import 'rxjs/add/operator/map';

import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitationsService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) { }

  sendInvitation(invitation): Observable<any> {
    return this.http.post('http://localhost:3000/invitations/v1/add', invitation);
  }

  getPendingInCount(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/invitations/v1/invitations/pending/in/count/' + id).pipe(
      map((response: Response) => response.json()));

  }

  getPendingIn(id: string):   Observable<any> {
    return this.http.get('http://localhost:3000/invitations/v1/invitations/pending/in/' + id).pipe(
      map((response: Response) => response.json()));

  }

  acceptInvitation(invitation) {
    return this.http.put('http://localhost:3000/invitations/v1/invitations/accept', invitation);
  }

  deleteInvitation(id: string) {
    return this.http.delete(apiUrl + '/invitations/v1/delete/' + id).map(data => data);
  }
}
