import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IUser } from '../../models/iuser';
import { UserService } from '../../services/api-services/user.service';
import { Router } from '../../../../node_modules/@angular/router';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  
  private firstname = new FormControl('');
  private lastname = new FormControl('');
  private email = new FormControl('');
  private password = new FormControl('');

  private cardForm = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    password: this.password
  }
  );
  constructor(private userService: UserService,
  private router:Router) { }

  ngOnInit() {
  }

  register() {
    let user = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: this.password.value
    };

    return this.userService.create(user).
      subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });

      
  }

}
