import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/api-services/user.service';
import { IUser } from '../models';

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss']
})
export class SendInvitationComponent implements OnInit {
  private foreigners;
  private currentUser:IUser;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.userService.getAll().subscribe(
      data =>{
        this.foreigners=data;
        console.log(this.foreigners);
      } );
  }

  getAvatar(user){
    if(user.avatar_url){
      return user.avatar_url;
    }else{
      return "/assets/images/default-avatar.jpg";
    }
  }

  send(foreigner){
    alert("user_id"+this.currentUser.id+"  c foreiner : "+foreigner.id);

  }

}
