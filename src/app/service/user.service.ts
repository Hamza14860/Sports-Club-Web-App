import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from '../model/user.model';
import { environment } from '../../environments/environment';

import {Attendance} from '../model/attendance.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    name: '',
    email: '',
    opponentRank: '',
    dailyTimings: '',
    games: [],
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //Http Methods
    
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }
  updateUser(user: User){
    return this.http.put(environment.apiBaseUrl+'/updateUser',user,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }
  getPlayerHome() {
    return this.http.get(environment.apiBaseUrl + '/playerHome');
  }

  deleteProfile(id:string) {
    
    return this.http.get('http://localhost:3000/api/delete-user/'+id);
  }

  getUsers(){
    return this.http.get<User[]>(environment.apiBaseUrl + '/players');
  }

  getattends(date:String,email:String){
    return this.http.get<Attendance[]>(environment.apiBaseUrl + '/attend-of/'+date+'/'+email);
  }

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  setToken1(token: string) {
    localStorage.setItem('token1', token);
  }

  getToken1() {
    return localStorage.getItem('token1');
  }

  deleteToken1() {
    localStorage.removeItem('token1');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }


  //Attendance Methods
  postAttendance(attendance: Attendance){
    return this.http.post(environment.apiBaseUrl+'/add-attendance',attendance,this.noAuthHeader);
  }
}
