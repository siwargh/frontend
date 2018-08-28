import { Component, OnInit } from '@angular/core';
import { IUser } from '../models';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.scss']
})
export class UserConnectComponent implements OnInit {
  private currentUser:IUser;
  private avatar:string;
  
  constructor(private router:Router) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(this.currentUser.avatar_url){
      this.avatar=this.currentUser.avatar_url;
    }else{
      this.avatar='assets/images/default-avatar.jpg';
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);

  }

  //TODO: Optimise logout component

}
