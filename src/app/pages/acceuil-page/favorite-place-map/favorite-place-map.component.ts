import { Component, OnInit, Input } from '@angular/core';
import { MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, ILatLong } from 'angular-maps';
import { PostService } from '../../../services/api-services/post.service';
import 'rxjs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-favorite-place-map',
  templateUrl: './favorite-place-map.component.html',
  styleUrls: ['./favorite-place-map.component.scss']
})
export class FavoritePlaceMapComponent implements OnInit {

  private _titles;
  private _markerTypeId = MarkerTypeId;

  private _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    zoom: 6
  };

  _box: IBox = {
    maxLatitude: 32,
    maxLongitude: -92,
    minLatitude: 29,
    minLongitude: -98
  };

  private _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 24,
    color: 'red',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: '\uF276'
  };

  _markers: Array<ILatLong> = new Array<ILatLong>();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getById('2')
    .map(data => {
      // tslint:disable-next-line:prefer-const
      let o = {
        categories: data.map(obj =>obj.categorie),
        positions: data.map(obj => obj.place).map(obj => obj.geoposition)
      };
     return o;
    })
    .subscribe(data => {
        this._markers = data.positions;
        this._titles = data.categories;
    });
  }

  private _click() {
    alert('hello world...');
  }

}
