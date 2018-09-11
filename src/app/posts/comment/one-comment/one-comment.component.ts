import { Component, OnInit, Input } from '@angular/core';
const avatarsFolder = 'http://localhost:3000/uploads/avatars/';

@Component({
  selector: 'app-one-comment',
  templateUrl: './one-comment.component.html',
  styleUrls: ['./one-comment.component.scss']
})
export class OneCommentComponent implements OnInit {
  @Input() _comment;

  constructor() { }

  ngOnInit() {

  }

  getAvatar(user?) {
    if (user.avatar_url) {
      return avatarsFolder + user.avatar_url;
    } else {
      return '/assets/images/default-avatar.jpg';
    }
  }

  getFullName(firstname?, lastname?) {
    return ' ' + firstname + ' ' + lastname;
  }

}
