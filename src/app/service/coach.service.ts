import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Coach} from '../model/coach.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  selectedUser: Coach = {
    name: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //Http Methods
    
  postCoach(user: Coach){
    return this.http.post(environment.apiBaseUrl+'/registerc',user,this.noAuthHeader);
  }

  loginC(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticatec', authCredentials,this.noAuthHeader);
  }

  getCoachProfile() {
    return this.http.get(environment.apiBaseUrl + '/coachProfile');
  }

  getCoaches(){
    return this.http.get<Coach[]>(environment.apiBaseUrl + '/coaches');
  }

  //Helper Methods

  deleteProfile(id:string) {
    
    return this.http.get(environment.apiBaseUrl+ '/delete-coach/'+id);
  }


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
    localStorage.setItem('token2', token);
  }

  getToken1() {
    return localStorage.getItem('token2');
  }

  deleteToken1() {
    localStorage.removeItem('token2');
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
}
