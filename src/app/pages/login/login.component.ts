import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {UserService} from '../../services/api-services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  elegantForm: FormGroup;
  user:any={email:'',password:''};

  constructor(private userService:UserService) {
    
  }

  login(user){
    this.userService.authenticate(user)
    .subscribe(data => console.log(data));

  }
}
  

  

 


