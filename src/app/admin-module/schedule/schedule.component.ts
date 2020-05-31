import { Component, OnInit } from '@angular/core';
import { NgForm ,FormControl, FormGroup  } from "@angular/forms";
import { SessionService } from '../../service/session.service';
import { CoachService } from '../../service/coach.service';
import { Router } from "@angular/router";
import { Coach } from 'src/app/model/coach.model';
import { Court} from 'src/app/model/court.model';
import { Session } from 'src/app/model/session.model';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  gameForm:FormGroup;
  public time: string = null;
  gameControl = new FormControl();
  timeControl = new FormControl();
  courtControl = new FormControl();
  coachControl = new FormControl();
  constructor(public coachService: CoachService,public userService: SessionService,private router : Router) {
    this.gameForm = new FormGroup({
      game: this.gameControl,
      time: this.timeControl,
      court: this.courtControl,
      cname: this.coachControl,
    });
  }


  session;
  email:string;
  curdate:string;
  selectedgame;
  showSucessMessage: Boolean;
  serverErrorMessages: String;
  today;
  coaches:Coach[];
  courts:Court[];
  games: string[] = [
    'Tennis', 'Badminton', 'Table Tennis', 'Squash'
  ];

  ngOnInit(): void {
    this.userService.getallCourts().subscribe((data:Court[])=>this.courts=data);
    this.coachService.getCoaches().subscribe((data1: Coach[]) => this.coaches = data1);
    this.email = localStorage.getItem('sessname'); 
  }


  onSubmit(form: NgForm) {
    this.today = new Date();
    this.curdate = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    this.session = new Session(this.userService.selectedSession.SessionID,this.email,this.coachControl.value,this.gameControl.value,this.curdate,this.timeControl.value,this.courtControl.value,this.userService.selectedSession.OpponentName);
    this.userService.postSession(this.session).subscribe(
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
    this.router.navigate(['/notifications']);
  }

  resetForm(form: NgForm) {
    this.userService.selectedSession = {
      SessionID: '',
      PlayerID: '',
      CoachID: '',
      Game: '',
      Date: '',
      Time:'',
      Court:'',
      OpponentName:''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
