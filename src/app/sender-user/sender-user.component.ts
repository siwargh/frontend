import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/api-services/user.service';
import { IUser } from '../models';
import { InvitationsService } from '../services/api-services/invitations.service';

const avatarsFolder="http://localhost:3000/uploads/avatars/";
const defaultAvatar="assets/images/default-avatar.jpg";

@Component({
  selector: 'app-sender-user',
  templateUrl: './sender-user.component.html',
  styleUrls: ['./sender-user.component.scss']
})
export class SenderUserComponent implements OnInit {
  @Input('inv') inv:any;
  private _user:IUser=new IUser();

  constructor(private userService:UserService,
  private invitationService:InvitationsService) { }

  ngOnInit() {
    console.log(this.inv);
    this.getSenderById(this.inv.senderId);
  }

  getSenderById(id){
    this.userService.getById(id).subscribe(
      data=>this._user=data.json().message);
  }

  getAvatar(userId){
      if(this._user.avatar_url){
        return avatarsFolder+this._user.avatar_url;
      }else{
        return defaultAvatar;
      }
  }

  getFullName(){
    return "  "+this._user.firstname+" "+this._user.lastname;
  }

  acceptInvitation(invitation){
      console.log(invitation);
      this.invitationService.acceptInvitation(invitation)
      .subscribe(data=>console.log(data));
  }

  rejectInvitation(){
      alert("Reject Invitation Triggred");
  }
}
