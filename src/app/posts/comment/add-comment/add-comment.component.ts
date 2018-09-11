import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentsService } from '../../../services/api-services/comments.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() userId;
  @Input() postId;
  @Output() eventCommentAdded: EventEmitter<any> = new EventEmitter();
  private content = new FormControl('');

  private addContent: FormGroup = new FormGroup(
    {
      content: this.content
    });


  constructor(private commentService: CommentsService) { }

  ngOnInit() {
  }

  addComment(event) {

    this.eventCommentAdded.emit('comment');
    /*
    console.log('-------- add content ------');
    console.log('event :', event);
    console.log('userId:' , this.userId);
    console.log('PostId:', this.postId);
    console.log('content', this.content.value);
    */
    const myComment = {
      userId: this.userId,
      postId: this.postId,
      content: this.content.value
    };

    // console.log('the content',myComment);
    this.commentService.create(myComment)
      .subscribe(data => console.dir(data));
  }
}
