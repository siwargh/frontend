import { Component, OnInit } from '@angular/core';

const avatarsFolder = 'http://localhost:3000/uploads/avatars/';

import 'rxjs';
import { UserService } from '../../services/api-services/user.service';
import { InvitationsService } from '../../services/api-services/invitations.service';
@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss']
})
export class SendInvitationComponent implements OnInit {

  private foreigners: any = [];
  private currentUser: any;

  constructor(private userService: UserService ,  private inviservice: InvitationsService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getAll().subscribe(
      data => {
        this.foreigners = data;
        this.foreigners = this.foreigners.filter(elm => elm._id !== this.currentUser._id);
        console.log(this.foreigners);
      } );
  }

  getAvatar(user) {
    if ( user.avatar_url) {
      return avatarsFolder + user.avatar_url;
    } else {
      return '/assets/images/default-avatar.jpg';
    }
  }


  send(sender, reciever) {
    const invitation = {senderId: sender, recieverId: reciever};
    this.inviservice.sendInvitation(invitation)
    .subscribe(response => console.log(response));
    this.foreigners = this.foreigners.filter(user => user._id !== reciever);
  }

}
