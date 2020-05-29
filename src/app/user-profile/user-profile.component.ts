import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from "@angular/router";
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Time } from '@angular/common';
import {User} from '../model/user.model';


interface Rank {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  sportsForm:FormGroup;

  gameList: string[] = ['Tennis', 'Badminton', 'Table Tennis', 'Squash'];

  ranks: Rank[] = [
    {value: 'Beginner', viewValue: 'Beginner'},
    {value: 'Medium', viewValue: 'Medium'},
    {value: 'Advance', viewValue: 'Advance'}
  ];

  public time: string = null;

  gameControl = new FormControl();
  rankControl = new FormControl(this.ranks[0].value);
  timeControl = new FormControl('12:40');

  userUpdaed;

  constructor(private userService: UserService, private router: Router) {
      this.sportsForm = new FormGroup({
        rank: this.rankControl,
        time: this.timeControl
      });
   }

  ngOnInit() {
    

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user']; 

        //initializing rank with value gotten from DB
        this.rankControl = new FormControl(this.userDetails.opponentRank);
        this.sportsForm.setControl('rank',this.rankControl);

        //initializing time with value gotten from DB
        //console.log(this.userDetails.dailyTimings);
        this.timeControl = new FormControl(this.userDetails.dailyTimings);
        this.sportsForm.setControl('time',this.timeControl);

        //initializing games array
        //console.log(this.userDetails.games);
        this.gameControl = new FormControl(this.userDetails.games);
        this.sportsForm.setControl('game',this.gameControl);


      },
      err => { 
        console.log(err);   
      }
    );

  }


  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  // onSubmit(form: NgForm) {
  onSubmit() {
    console.log(this.rankControl.value);
    console.log(this.gameControl.value);
    console.log(this.timeControl.value);
    // console.log(this.time);
    this.userUpdaed = new User(this.userDetails.name,this.userDetails.email,this.rankControl.value,this.timeControl.value,this.userDetails.password,this.gameControl.value);
  

    this.userService.updateUser(this.userUpdaed).subscribe(
      res => {
        console.log("Updated");

      },
      err => {
        console.log("Not Updated");
        if (err.status === 422) {
          console.log(err+" NOT UPDATED");
        }
        else
        console.log('Something went wrong.Please contact admin.');
      }
    );

  }

}
