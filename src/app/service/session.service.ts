import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from '../model/user.model';
import { environment } from '../../environments/environment';

import {Session} from '../model/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  selectedSession: Session = {
    SessionID: '',
    PlayerID: '',
    CoachID: '',
    Game:'',
    Time: '',
    Court:'',
    OpponentName:''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //Http Methods
    
  postSession(user: Session){
    return this.http.post(environment.apiBaseUrl+'/add-session',user);
  }

  getSessions(){
    return this.http.get<Session[]>(environment.apiBaseUrl+'/sessions');
  }
}
