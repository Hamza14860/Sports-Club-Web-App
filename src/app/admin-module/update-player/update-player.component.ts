import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { UserService } from '../../service/user.service';
import { Router } from "@angular/router";
import { User } from 'src/app/model/user.model';
@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  usernew:User;
  getuser:User;
  email;
  showSucessMessage;
  serverErrorMessages;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ranks: string[] = [
    'Beginner', 'Medium', 'Advance'
  ];
gameForm:FormGroup;
rankControl = new FormControl();

  constructor(public userService:UserService,public router:Router) { 
    this.gameForm = new FormGroup({
      rank: this.rankControl
    });
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.email = localStorage.getItem('updateEmailPlayer');
    this.userService.findUser(this.email).subscribe((data:User)=>this.getuser=data);
    
    this.usernew = new User(this.userService.selectedUser.name,this.email,this.rankControl.value,this.getuser.dailyTimings,this.getuser.games,this.userService.selectedUser.password);
    
    this.userService.updateUser(this.usernew).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
    this.router.navigate(['/admin-view']);
    
  }

  resetForm(form: NgForm) {
   this.userService.selectedUser = {
    name:'',
    email:'',
    opponentRank:'',
    dailyTimings:'',
    games: [],
    password:'',
      
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
