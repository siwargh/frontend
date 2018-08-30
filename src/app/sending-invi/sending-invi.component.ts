import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/api-services/user.service';
import { IUser } from '../models';
import { InvitationsService } from '../services/api-services/invitations.service';
import 'rxjs';
const avatarsFolder = 'http://localhost:3000/uploads/avatars/';
@Component({
  selector: 'app-sending-invi',
  templateUrl: './sending-invi.component.html',
  styleUrls: ['./sending-invi.component.scss']
})
export class SendingInviComponent implements OnInit {
  private foreigners:any=[];
  private currentUser:IUser;
  constructor(
    private userService:UserService, 
    private inviservice: InvitationsService) { }
  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    this.userService.getAll().subscribe(
      data =>{
        this.foreigners=data;
        this.foreigners.splice(0,1,this.foreigners.indexOf(this.currentUser));
      } );
  }

  getAvatar(user){
    if(user.avatar_url){
      return  avatarsFolder+ user.avatar_url;
    }else{
      return "/assets/images/default-avatar.jpg";
    }
  }

  send(sender, reciever){
    let invitation={senderId:sender,recieverId:reciever};
    this.inviservice.sendInvitation(invitation)
    .subscribe(response => console.log(response));
    this.foreigners = this.foreigners.filter(user => user._id !== reciever);
  }
supprimer(reciever){
  this.foreigners = this.foreigners.filter(user => user._id !== reciever);
}
}

