import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../service/user.service';
import { CoachService } from '../../service/coach.service';
import {AttendanceService} from '../../service/attendance.service';
import { User } from '../../model/user.model';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coach } from 'src/app/model/coach.model';
import { environment } from '../../../environments/environment';
import { Attendance } from 'src/app/model/attendance.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
 today;
 currdate;
 notifications;
  constructor(private router:Router,private attendService:AttendanceService) { }

  ngOnInit(): void {
    this.today = new Date();
    this.currdate = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    this.attendService.getattendd(this.currdate).subscribe((data:Attendance[])=>this.notifications=data);
  }
  
  onSchedule(email:string){
    localStorage.setItem('sessname',email);
    this.router.navigate(['/schedule']);
  }
  


}
