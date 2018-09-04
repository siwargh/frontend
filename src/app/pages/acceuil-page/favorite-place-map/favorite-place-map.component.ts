import { Component, OnInit, Input } from '@angular/core';
import { MarkerTypeId, IMapOptions } from 'angular-maps';

@Component({
  selector: 'app-favorite-place-map',
  templateUrl: './favorite-place-map.component.html',
  styleUrls: ['./favorite-place-map.component.scss']
})
export class FavoritePlaceMapComponent implements OnInit {

  @Input()title = 'Stade Rejich';
  @Input()latitude = 35.470749;
  @Input()longitude = 11.0479372;
  private _markerTypeId = MarkerTypeId;

  private _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1
  };
  constructor() { }

  ngOnInit() {
  }

  getLatitude() {
    return this.latitude.toString();
  }
  getLongitude(){
    return this.longitude.toString();
  }


  private _click() {
    alert('hello world...');
  }

}
