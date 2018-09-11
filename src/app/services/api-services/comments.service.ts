import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {apiUrl} from '../../app.config';

import {  ICOMMENT } from '../../models';
import { Observable, pipe } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  constructor(private http: Http) { }

  getAll() {
    return this.http.get(apiUrl + '/comments' ).pipe(
    map((response: Response) => response.json()));
  }

  getById(_id: string) {
    return this.http.get(apiUrl + '/comments/current/' + _id ).pipe(map((response: Response) => response.json()));
  }

  create(comment) {
    return this.http.post(apiUrl + '/comments/v1/addcomment', comment );
    // .pipe(map(response => response.json()));
  }

  update(comments: ICOMMENT) {
    return this.http.put(apiUrl + '/comments/' + comments.id, comments );
  }

  delete(_id: string) {
    return this.http.delete(apiUrl + '/comments/' + _id );
  }

}





