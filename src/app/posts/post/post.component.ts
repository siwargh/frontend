import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/api-services/post.service';
import { UserService } from '../../services/api-services/user.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private currentUser;
  private myPosts: any = [];
  constructor(
    private postService: PostService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.postService.getById(this.currentUser._id)
      .subscribe(data => {
       this.myPosts = data;
      });
  }

}
