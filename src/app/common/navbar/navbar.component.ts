import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InvitationsService } from '../../services/api-services/invitations.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private search = new FormControl('');
  private countInPendingInvitation: number;
  private currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private invitationService: InvitationsService) { }

  ngOnInit() {

    const id = this.currentUser._id;
    this.invitationService.getPendingInCount(id)
      .subscribe(data => {
        this.countInPendingInvitation = data.message;}

      );
  }

}
