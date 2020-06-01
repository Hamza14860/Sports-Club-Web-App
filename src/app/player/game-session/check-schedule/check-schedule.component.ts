import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from '../../../service/session.service';
import { UserService } from '../../../service/user.service';
import {Session} from '../../../model/session.model';
import {User} from '../../../model/user.model';




@Component({
  selector: 'app-check-schedule',
  templateUrl: './check-schedule.component.html',
  styleUrls: ['./check-schedule.component.css']
})
export class CheckScheduleComponent implements OnInit {

  sessions;
  sessionCurr;

  userDetails;

  today;
  currdate;

  oppplayerG=" NA";
  coachG=" NA";
  timeG=" NA";
  courtG=" NA";
  constructor(private http: HttpClient,private sessionService: SessionService, private userService: UserService,private router : Router) { 
    this.today = new Date();
    this.currdate = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
  }

  ngOnInit(): void {
    this.sessionService.getSessions().subscribe((data: Session[]) => this.sessions = data);

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        
        this.sessions.forEach(element => {

          if (element.PlayerID == this.userDetails.email && element.Date ==this.currdate){
            console.log( "Session Found: "+ element.SessionID);
            this.coachG= " "+ element.CoachID;
            this.timeG = " "+ element.Time;
            this.courtG = " "+ element.Court;
            this.oppplayerG = " "+ element.OpponentName;
          }
          else{
            console.log("No sessions for today found");
          }
        });
      },
      err => { 
        console.log(err);   
      }
    );

  }

  
}
