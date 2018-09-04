import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import * as apiUrl from '../../app.config';

import { map } from 'rxjs/operators';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: Http) { }


  getAll(id) {
    return this.http.get(apiUrl + '/friends/v1/get/all/' + id).pipe(
    map((response: Response) => response.json()));
  }

  getById(_id: string) {
    return this.http.get(apiUrl + '/friends/current/' + _id).pipe(map((response: Response) => response.json()));
  }


  delete(_id: string) {
    return this.http.delete(apiUrl + '/friends/' + _id);
  }


 
}



