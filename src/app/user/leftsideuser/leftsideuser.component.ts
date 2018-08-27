import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api-services/user.service';
import { IUser } from '../../models';
const defaultAvatar = "/assets/images/default-avatar.jpg";
@Component({
  selector: 'app-leftsideuser',
  templateUrl: './leftsideuser.component.html',
  styleUrls: ['./leftsideuser.component.scss']
})
export class LeftsideUserComponent implements OnInit {
  private currentUser: IUser = new IUser();
  private avatar: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (this.currentUser.avatar_url) {
      this.avatar = this.currentUser.avatar_url
    }
    else {
      this.avatar = defaultAvatar;
    }
  }
}


