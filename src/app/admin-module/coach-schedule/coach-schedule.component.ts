import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { CoachService } from '../../service/coach.service';
import { UserService } from '../../service/user.service';
import { Router } from "@angular/router";
import { Session } from 'src/app/model/session.model';
@Component({
  selector: 'app-coach-schedule',
  templateUrl: './coach-schedule.component.html',
  styleUrls: ['./coach-schedule.component.css']
})
export class CoachScheduleComponent implements OnInit {

  constructor(private user:UserService,private session:SessionService,private coach:CoachService,private router:Router) { }

  ngOnInit(): void {
    this.coach.getSchedule('date','email');
  }

}
