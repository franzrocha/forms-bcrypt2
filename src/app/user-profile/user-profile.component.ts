import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isShown: boolean = false; 
 

  val = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: ""
  }

  salt = bcrypt.genSaltSync(10);
  pass = bcrypt.hashSync(this.val.password, this.salt);

  show() {
    
      this.isShown = ! this.isShown;
    }

  ngOnInit(): void {}

  onSubmit(v: NgForm){
    console.log(v.value, v.valid)
    console.log(this.salt);
    console.log(this.pass);
  }

  
}