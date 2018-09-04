import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil-page',
  templateUrl: './acceuil-page.component.html',
  styleUrls: ['./acceuil-page.component.scss']
})
export class AcceuilPageComponent implements OnInit {
  private showPost = false;
  constructor() { }

  ngOnInit() {
  }

  togglePost() {
    console.log(this.showPost);
     this.showPost = !this.showPost;
  }

}
