import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import { IUser } from '../../models/index';
import  {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: Http) { }
  

  getAll() {
    return this.http.get('http://localhost:3000'+'/users', this.jwt())
    .map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get("http://localhost:3000" + '/users/' + _id);
   
  }

  create(user: IUser) {
    return this.http.post("http://localhost:3000" + '/users/register', user, this.jwt());
  }

  update(user: IUser) {
    return this.http.put("http://localhost:3000" + '/users/' + user.id, user, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete('http://localhost:3000' + '/users/' + _id, this.jwt());
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