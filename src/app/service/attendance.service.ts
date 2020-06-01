import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from '../model/user.model';
import { environment } from '../../environments/environment';

import {Attendance} from '../model/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
 
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //Http Methods

  deleteNotification(id:string) {
    
    return this.http.get('http://localhost:3000/api/delete-notif/'+id);
  }

  getNotifications(){
    return this.http.get<Attendance[]>(environment.apiBaseUrl + '/attends');
  }

  updateAttend(user: Attendance){
    return this.http.put('http://localhost:3000/api/updateAttend',user,this.noAuthHeader);
  }

  getattends(date:String,email:String){
    return this.http.get<Attendance[]>(environment.apiBaseUrl + '/attend-of/'+date+'/'+email);
  }

  getattendd(date:String){
    return this.http.get<Attendance[]>(environment.apiBaseUrl + '/attend-of/'+date);
  }

  //Attendance Methods
  postAttendance(attendance: Attendance){
    return this.http.post(environment.apiBaseUrl+'/add-attendance',attendance,this.noAuthHeader);
  }
}
