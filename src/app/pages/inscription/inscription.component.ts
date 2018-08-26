import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {IUser} from '../../models/iuser';
import {UserService} from '../../services/api-services/user.service';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  user:any={firstname:'',lastname:'',password:'' ,email:''};
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  register(user){
    console.log("user befor posting",user);
    return this.userService.create(user).
    subscribe(data => console.log(data));
  }

}
