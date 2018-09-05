import { Component, OnInit, Input, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { IUser } from '../../models';
import { UserService } from '../../services/api-services/user.service';
import { InvitationsService } from '../../services/api-services/invitations.service';

const avatarsFolder = 'http://localhost:3000/uploads/avatars/';
const defaultAvatar = 'assets/images/default-avatar.jpg';

@Component({
  selector: 'app-sender-user',
  templateUrl: './sender-user.component.html',
  styleUrls: ['./sender-user.component.scss']
})
export class SenderUserComponent implements OnInit {
  @Input('inv') inv: any;
  @Output() acceptInvitationEvent: EventEmitter<any> = new EventEmitter();
  @Output() declineInvitationEvent: EventEmitter<any> = new EventEmitter();

  private _user: IUser = new IUser();

  constructor(private userService: UserService,
  private invitationService: InvitationsService) { }

  ngOnInit() {
    console.log(this.inv);
    this.getSenderById(this.inv.senderId);
  }

  getSenderById(id) {
    this.userService.getById(id).subscribe(
      data => this._user = data.json().message);
  }

  getAvatar(userId) {
      if (this._user.avatar_url) {
        return avatarsFolder + this._user.avatar_url;
      } else {
        return defaultAvatar;
      }
  }

  getFullName() {
    return '  ' + this._user.firstname + ' ' + this._user.lastname;
  }

  acceptInvitation(invitation) {
      this.invitationService.acceptInvitation(invitation)
      .subscribe(data => console.log(data));
     this.acceptInvitationEvent.emit(invitation);
  }

  declineInvitation(invitation) {
    this.declineInvitationEvent.emit(invitation);
    this.invitationService.deleteInvitation(invitation._id)
    .subscribe(data => console.log('Deleted invitation', data));
  }
}
