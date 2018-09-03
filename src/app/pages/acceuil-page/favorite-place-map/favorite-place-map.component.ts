import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-place-map',
  templateUrl: './favorite-place-map.component.html',
  styleUrls: ['./favorite-place-map.component.scss']
})
export class FavoritePlaceMapComponent implements OnInit {

  title = 'Stade Rejich';
  lat = 35.470749;
  lng = 11.0479372;
  constructor() { }

  ngOnInit() {
  }

}
