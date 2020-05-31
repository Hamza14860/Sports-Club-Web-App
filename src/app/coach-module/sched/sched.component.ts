import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { Router } from "@angular/router";
import { Session } from 'src/app/model/session.model';
@Component({
  selector: 'app-sched',
  templateUrl: './sched.component.html',
  styleUrls: ['./sched.component.css']
})
export class SchedComponent implements OnInit {

  constructor(public session:SessionService,public router:Router) { }
  schedules;
  coachuser;
  today;
  currdate;
  ngOnInit(): void {
    this.today = new Date();
    this.currdate = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    this.coachuser = localStorage.getItem('coachuser');
    this.session.getSession(this.currdate,this.coachuser).subscribe((data:Session[])=>this.schedules=data);
  }

}
