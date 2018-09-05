import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/api-services/post.service';
import { UserService } from '../../services/api-services/user.service';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private myPosts: any = [];
  constructor(
    private postService: PostService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.postService.getById(currentUser._id)
      .subscribe(data => {
       this.myPosts = data;
        //  console.log('ownPosts   :  ', data);
      });
  }

}
