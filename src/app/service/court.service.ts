import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Court} from '../model/court.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourtService {
  selectedCourt: Court = {
    CourtNo: null,
    courtName: '',
    gameName: '',
    isFree: 'True'
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }

  postCourt(court: Court){
    return this.http.post(environment.apiBaseUrl+'/add-court',court,this.noAuthHeader);
  }

  getCourts(){
    return this.http.get<Court[]>(environment.apiBaseUrl + '/courts');
  }
}
