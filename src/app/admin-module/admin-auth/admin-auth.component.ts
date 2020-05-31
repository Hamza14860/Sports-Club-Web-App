import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }

  model ={
    username :'',
    password:''
  };
 usern;
 passw;
  serverErrorMessages: string;
  
  ngOnInit() {
    

  }

  onSubmit(form : NgForm){
    this.usern = this.model.username;
    this.passw = this.model.password;
    if(this.usern === 'admin' && this.passw === 'admin'){
      this.serverErrorMessages = '';
      this.router.navigate(['/admin-home']);
    }
    else{
      form.resetForm();
      this.serverErrorMessages = 'Invalid username or password';
    }
  }

}
