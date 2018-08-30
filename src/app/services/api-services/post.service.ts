import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import {  IPost } from '../../models';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http, private config: AppConfig) { }
  

  getAll() {
    return this.http.get('http://localhost:3000' + '/posts', this.jwt()).pipe(
    map((response: Response) => response.json()));
  }

  getById(_id: string) {
    return this.http.get('http://localhost:3000' + '/posts' + _id, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  create(post: IPost) {
    return this.http.post('http://localhost:3000' + '/posts/register', post, this.jwt());
  }

  update(post: IPost) {
    return this.http.put('http://localhost:3000' + '/posts/' + post.id, post, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete('http://localhost:3000' + '/posts/' + _id, this.jwt());
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

