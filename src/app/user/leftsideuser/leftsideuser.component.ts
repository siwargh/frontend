import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api-services/user.service';

@Component({
  selector: 'app-leftsideuser',
  templateUrl: './leftsideuser.component.html',
  styleUrls: ['./leftsideuser.component.scss']
})
export class LeftsideUserComponent implements OnInit {
  private currentUser: any = {
    id: 1,
    username: "",
    firstName: "",
    lastName: "",
    avatar_url: "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png",
    email: "",
    occupation: "",
    mobile: "",
    adress: "",
    city: "",
    country: "",
    GeoPosition: {
      lat: "35.1222",
      log: "11.56655"
    }
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getById("1").subscribe((data) => {
      this.currentUser = JSON.parse(data._body);
    })
  }

}
