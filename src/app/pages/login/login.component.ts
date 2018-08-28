import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/api-services/user.service';
import { ActivatedRoute,Router } from '../../../../node_modules/@angular/router';
import { AlertPromise } from '../../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private useremail = new FormControl('');
  private userpassword = new FormControl('');
  private elegantForm: FormGroup = new FormGroup(
    {
      useremail: this.useremail,
      userpassword: this.userpassword
    });

  

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {}

  login() {
    this.userService.authenticate(
      {
        email:this.useremail.value,
        password:this.userpassword.value
      })
      .subscribe(data => {
        let response=data.json();
       // console.log(response);
        if (response.err==='success'){ 
           localStorage.setItem('currentUser', JSON.stringify(response.message));
           this.router.navigate(['/acceuil']);
        } else {
          //TODO : Enhance UX if user not registred
          alert("User not registred yet  :)")
          this.router.navigate(['/']);
        }
      });

  }


    ngOnInit() {
  }

  
}







