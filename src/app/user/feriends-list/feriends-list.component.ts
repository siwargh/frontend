import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../services/api-services/friends.service';

const currentUserId = JSON.parse(localStorage.getItem('currentUser'))._id;
const avatarsFolder = 'http://localhost:3000/uploads/avatars/';

@Component({
  selector: 'app-feriends-list',
  templateUrl: './feriends-list.component.html',
  styleUrls: ['./feriends-list.component.scss']
})
export class FeriendsListComponent implements OnInit {
  private myFriends = [];
  constructor(private friendService: FriendsService) { }

  ngOnInit() {
    return this.friendService.getAll(currentUserId)
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
