import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { CoachService } from '../../service/coach.service';
import { environment } from '../../../environments/environment';
import {Coach} from 'src/app/model/coach.model';
@Component({
  selector: 'app-coach-auth',
  templateUrl: './coach-auth.component.html',
  styleUrls: ['./coach-auth.component.css']
})
export class CoachAuthComponent implements OnInit {
  constructor(private userService: CoachService,private router : Router) { }
 isPresent:Boolean;
 coachf;
  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  
  ngOnInit() {
    if(localStorage.getItem('coachuser')!=''){
      environment.navCheck=false;
      this.router.navigateByUrl('/coach-home');

    }
  }

  onSubmit(form : NgForm){
    this.userService.loginC(this.model.email,this.model.password).subscribe((data:Coach)=>this.coachf=data);
    
    if(Object.keys(this.coachf).length === 0){
      this.serverErrorMessages="Some Error Found";
    }
    else{
      localStorage.setItem('coachuser',this.model.email);
      this.router.navigate(['/coach-home']);
    }
  }

}
