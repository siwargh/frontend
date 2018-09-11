import { Component, OnInit, Input, OnChanges } from '@angular/core';

const avatarsFolder = 'http://localhost:3000/uploads/avatars/';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit,OnChanges {
 @Input() post: any;
 private postUrl;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  handleRateSelection() {

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
