import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../services/api-services/friends.service';


const avatarsFolder = 'http://localhost:3000/uploads/avatars/';

@Component({
  selector: 'app-feriends-list',
  templateUrl: './feriends-list.component.html',
  styleUrls: ['./feriends-list.component.scss']
})
export class FeriendsListComponent implements OnInit {
  private myFriends = [];
  private currentUserId;
  constructor(private friendService: FriendsService) { }

  ngOnInit() {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUser'))._id;
    return this.friendService.getAll(this.currentUserId)
    .subscribe(data => this.myFriends = data.message);
  }


  getAvatar(user) {
    if ( user.avatar_url) {
      return avatarsFolder + user.avatar_url;
    } else {
      return '/assets/images/default-avatar.jpg';
    }
  }

  getFullName(firstname, lastname) {
    return ' ' + firstname + ' ' + lastname;
  }

}
