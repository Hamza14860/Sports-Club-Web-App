import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from '../model/user.model';
import { environment } from '../../environments/environment';

import {Session} from '../model/session.model';
import {Court} from '../model/court.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  selectedSession: Session = {
    SessionID: '',
    PlayerID: '',
    CoachID: '',
    Game:'',
    Date:'',
    Time: '',
    Court:'',
    OpponentName:''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //Http Methods
    
  postSession(user: Session){
    return this.http.post(environment.apiBaseUrl+'/add-session',user,this.noAuthHeader);
  }

  
  getCourts(game:string){
    return this.http.get<Court[]>(environment.apiBaseUrl+'/get-courts/'+game);
  }

  getallCourts(){
    return this.http.get<Court[]>(environment.apiBaseUrl+'/courts');
  }

  getSession(date:string,coach:string){
    return this.http.get<Session[]>(environment.apiBaseUrl+'/session-today/'+date+'/'+coach);
  }

  getSessions(){
    return this.http.get<Session[]>(environment.apiBaseUrl+'/sessions');
  }
}
