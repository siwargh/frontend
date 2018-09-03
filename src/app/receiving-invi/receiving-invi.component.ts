import { Component, OnInit } from '@angular/core';
import { InvitationsService } from '../services/api-services/invitations.service';

@Component({
  selector: 'app-receiving-invi',
  templateUrl: './receiving-invi.component.html',
  styleUrls: ['./receiving-invi.component.scss']
})
export class ReceivingInviComponent implements OnInit {
  private invitationsIn: any = [];
  private currentUser = JSON.parse(localStorage.getItem('currentUser'));
  constructor(private invitationService: InvitationsService) { }

  ngOnInit() {
    const id = this.currentUser._id;
      this.invitationService.getPendingIn(id)
        .subscribe(data => this.invitationsIn = data.message);
  }

  onAcceptInvitation(event) {
      // console.log('this ivent captured onAcceptInvitation : ', event);
      const invitation = event;
      this.invitationsIn = this.invitationsIn.filter(inv => inv._id !== invitation._id);
  }

}
