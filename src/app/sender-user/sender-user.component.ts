import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/api-services/user.service';
import { IUser } from '../models';

const avatarsFolder="http://localhost:3000/uploads/avatars/";
const defaultAvatar="assets/images/default-avatar.jpg";

@Component({
  selector: 'app-sender-user',
  templateUrl: './sender-user.component.html',
  styleUrls: ['./sender-user.component.scss']
})
export class SenderUserComponent implements OnInit {
  @Input() userId:string;
  private _user:IUser=new IUser();

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getSenderById(this.userId);
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
}
