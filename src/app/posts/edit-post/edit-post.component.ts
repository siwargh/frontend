import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/api-services/post.service';
import { Router } from '@angular/router';
import { AlertPromise } from 'selenium-webdriver';



@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  private categorie: string;
  private adress1: string;
  private adress2: string;
  private city: string;
  private zipcode: string;
  private longitude: string;
  private latitude: string;
  private ckeditorContent: any;

 private cureentUser = JSON.parse(localStorage.getItem('currentUser'));

 constructor(private postService: PostService,
  private router: Router) { }

  ngOnInit() {

  }

  onEditorChange($event) {

  }
  onChange($event) { }
  onReady($event) { }
  onFocus($event) { }
  onBlur($event) { }
  onContentDom($event) { }
  onFileUploadRequest($event) { }
  onFileUploadResponse($event) { }
  onPaste($event) { }
  onDrop($event) { }
  save() {
   const post = {
     author: this.cureentUser._id,
     content: this.ckeditorContent,
     categorie: this.categorie,
     place: {
                adress1: this.adress1,
                adress2: this.adress2,
                city: this.city,
                zipcode: this.zipcode,
                geoposition: {
                  longitude: this.longitude,
                  latitude: this.latitude
                }

              }
    };


    this.postService.create(post).subscribe(data => console.log(data));
    alert('Post Added succeffully :)');
    this.router.navigate(['/']);
  }
}


