import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { CoachService } from '../../service/coach.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-coach-auth',
  templateUrl: './coach-auth.component.html',
  styleUrls: ['./coach-auth.component.css']
})
export class CoachAuthComponent implements OnInit {
  constructor(private userService: CoachService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  
  ngOnInit() {
    if(this.userService.isLoggedIn()){
      environment.navCheck=false;
      this.router.navigateByUrl('/coach-home');

    }
  }

  onSubmit(form : NgForm){
    this.userService.loginC(form.value).subscribe(
      res => {
        environment.navCheck=false;
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/coach-home');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
