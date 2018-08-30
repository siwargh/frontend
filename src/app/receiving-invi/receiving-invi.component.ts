import { Component, OnInit } from '@angular/core';
import { InvitationsService } from '../services/api-services/invitations.service';

@Component({
  selector: 'app-receiving-invi',
  templateUrl: './receiving-invi.component.html',
  styleUrls: ['./receiving-invi.component.scss']
})
export class ReceivingInviComponent implements OnInit {
  private invitationsIn:any=[];
  private currentUser=JSON.parse(localStorage.getItem('currentUser'));
  constructor(private invitationService:InvitationsService) { }

  ngOnInit() {
    let id=this.currentUser._id;
      this.invitationService.getPendingIn(id)
        .subscribe(data=>this.invitationsIn=data.message);
  }

}
