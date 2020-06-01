import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import {UserService} from '../../../service/user.service';
import { Attendance } from 'src/app/model/attendance.model';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-choose-games',
  templateUrl: './choose-games.component.html',
  styleUrls: ['./choose-games.component.css']
})
export class ChooseGamesComponent implements OnInit {
  gameForm:FormGroup;
  public time: string = null;

  userDetails;
  attendances:Attendance[];
  today;
  currdate;
  currtime;
  marked:Boolean = false;
  attendance;
  len;
  buttonText= "Mark Attendance"
  errorText = "";


  games: string[] = [
    'Tennis', 'Badminton', 'Table Tennis', 'Squash'
  ];
  gameControl = new FormControl(this.games[0]);
  timeControl = new FormControl();

  constructor(public userService: UserService) {
    this.today = new Date();
    this.currdate = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    this.currtime = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
    console.log(this.currdate);
    console.log(this.currtime);

    this.gameForm = new FormGroup({
      game: this.gameControl,
      time: this.timeControl

    });
   }

  ngOnInit(): void {

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];  

        this.userService.getattends(this.currdate,this.userDetails.email).subscribe((data: Attendance[]) => this.attendances = data);
        console.log(this.userDetails.email+" "+this.attendances);
      },
      err => { 
        console.log(err);   
      }
    );

  }

  onSubmit() {

    if (this.timeControl.value == undefined ){
      console.log("undefined Time, Time is empty");
      this.errorText = "Kindly Add Time to Play"
    }

    else{
      this.errorText = "";
      console.log(this.gameControl.value);
      console.log(this.timeControl.value );

      var messageToSend = this.gameControl.value + ","+ this.timeControl.value;
      this.attendance = new Attendance(this.userDetails.email,this.currdate,this.currtime,messageToSend);
      
  
      // console.log(this.attendance.playerEmail);
      // console.log(this.attendance.date);
      // console.log(this.attendance.time);
      // console.log(this.attendance.message);
  
      // this.userService.getattends(this.currdate,this.attendance.playerEmail).subscribe((data: Attendance[]) => this.attendances = data);
  
      if(this.attendances.length>0)
      {
        console.log("Attendace Already Marked for today");
          this.marked = true;
          this.buttonText = "Attendance Already Marked For Today";
  
      }
  
      if(this.marked == false)
      {
        this.buttonText = "Attendance Marked";
      }
  
  
      if(!this.marked && this.buttonText == "Attendance Marked"){
        this.userService.postAttendance(this.attendance).subscribe(
          res => {
            console.log("Attendance Marked");
            //this.buttonText = "Attendance Marked";
          },
          err => {
            console.log("ERROR");
          }
        );
      }
    }
   

  }

}
