import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import {  ICOMMENT } from '../../models';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  
  constructor(private http: Http, private config: AppConfig) { }
  

  getAll() {
    return this.http.get(this.config.apiUrl + '/comments', this.jwt()).pipe(
    map((response: Response) => response.json()));
  }

  getById(_id: string) {
    return this.http.get(this.config.apiUrl + '/comments/current/' + _id, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  create(comments: ICOMMENT) {
    return this.http.post(this.config.apiUrl + '/comments/register', comments, this.jwt());
  }

  update(comments: ICOMMENT) {
    return this.http.put(this.config.apiUrl + '/comments/' + comments.id, comments, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/comments/' + _id, this.jwt());
  }

  // private helper methods
  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}





