import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from "@angular/router";
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Time } from '@angular/common';


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
    {value: 'beginner', viewValue: 'Beginner'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'advance', viewValue: 'Advance'}
  ];

  public time: string = null;

  gameControl = new FormControl();
  rankControl = new FormControl(this.ranks[0].value);
  timeControl = new FormControl();



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
    console.log(this.timeControl.value );
    // console.log(this.time);

  }

}
