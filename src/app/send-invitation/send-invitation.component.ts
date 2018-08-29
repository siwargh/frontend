import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/api-services/user.service';
import { IUser } from '../models';
import { InvitationsService } from '../services/api-services/invitations.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss']
})
export class SendInvitationComponent implements OnInit {
  private foreigners;
  private currentUser:IUser;

  constructor(
    private userService:UserService, 
    private inviservice: InvitationsService) { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    this.userService.getAll().subscribe(
      data =>{
        this.foreigners=data;
      } );
  }

  getAvatar(user){
    if(user.avatar_url){
      return user.avatar_url;
    }else{
      return "/assets/images/default-avatar.jpg";
    }
  }

  send(sender, reciever){
    let invitation={senderId:sender,reciverId:reciever};
    this.inviservice.sendInvitation(invitation)
    .subscribe(response => console.log(response));


    this.filerSendedUser(reciever);
  }


  filerSendedUser(reciever){
      this.foreigners.fiter(u=> u._id===reciever);
  };

}
