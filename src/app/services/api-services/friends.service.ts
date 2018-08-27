import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import { IfRIEND } from '../../models';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: Http, private config: AppConfig) { }
  

  getAll() {
    return this.http.get(this.config.apiUrl + '/friends', this.jwt())
    .map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get(this.config.apiUrl + '/friends/current/' + _id, this.jwt()).map((response: Response) => response.json());
  }

  create(friends: IfRIEND) {
    return this.http.post(this.config.apiUrl + '/friends/register', friends, this.jwt());
  }

  update(friends: IfRIEND) {
    return this.http.put(this.config.apiUrl + '/friends/' + friends.id, friends, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/friends/' + _id, this.jwt());
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



