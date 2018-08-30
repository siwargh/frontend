import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


import { AppConfig } from '../../app.config';
import { map } from 'rxjs/operators';

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
}
