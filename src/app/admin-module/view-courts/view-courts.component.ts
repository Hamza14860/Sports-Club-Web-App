import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CourtService } from '../../service/court.service';
import { Court } from '../../model/court.model';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-courts',
  templateUrl: './view-courts.component.html',
  styleUrls: ['./view-courts.component.css']
})
export class ViewCourtsComponent implements OnInit {

  constructor(private http: HttpClient,private courtService: CourtService,private router : Router) { }

  courts;
  serverErrorMessages: string;
  value:String = 'court';
  ngOnInit(): void {    
    this.courtService.getCourts().subscribe((data: Court[]) => this.courts = data);

  }

  shCoach():void{
    this.value = 'court';
  }

  shCreate():void{
    this.router.navigate(['/add-court']);
  }

}
