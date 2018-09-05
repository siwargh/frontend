import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { apiUrl } from '../../app.config';
import {  IPost } from '../../models';

import 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { }


  getAll() {
    return this.http.get('http://localhost:3000' + '/posts').pipe(
    map((response: Response) => response.json()));
  }

  getById(_id: string) {
    return this.http.get('http://localhost:3000/posts/v1/mur/' + _id).pipe(
    map((response: Response) => response.json()));
  }

  create(post) {
    return this.http.post('http://localhost:3000/posts/v1/add', post);
  }

  update(post: IPost) {
    return this.http.put('http://localhost:3000' + '/posts/' + post.id, post);
  }

  delete(_id: string) {
    return this.http.delete('http://localhost:3000' + '/posts/' + _id);
  }
}

