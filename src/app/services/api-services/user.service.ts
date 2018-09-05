import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


import { apiUrl } from '../../app.config';
import { IUser } from '../../models';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) { }
  

  getAll() {
    return this.http.get('http://localhost:3000' + '/users/v1/all').pipe(
    map((response: Response) => response.json()));
  }

  getById(id: string) {
    return this.http.get('http://localhost:3000/users/v1/' + id);
  }

  create(user) {
    return this.http.post('http://localhost:3000' + '/users/v1/add', user);
  }

  update(user: IUser) {
    return this.http.put('http://localhost:3000' + '/users/' + user.id, user);
  }

  delete(_id: string) {
    return this.http.delete('http://localhost:3000' + '/users/v1/delete/' + _id);
  }

  authenticate(user){
    return this.http.post('http://localhost:3000/users/v1/authenticate', user, this.options);

  }
 
  }
