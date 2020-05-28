import { Component, OnInit } from '@angular/core';
import { CoachService } from '../../service/coach.service';
import { Router } from "@angular/router";
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Time } from '@angular/common';
import { Coach } from 'src/app/model/coach.model';
@Component({
  selector: 'app-coach-home',
  templateUrl: './coach-home.component.html',
  styleUrls: ['./coach-home.component.css']
})
export class CoachHomeComponent implements OnInit {

  coachd:Coach;
  coachname:String;
  sportsForm:FormGroup;

  gameList: string[] = ['Tennis', 'Badminton', 'Table Tennis', 'Squash'];


  public time: string = null;


  constructor(private userService: CoachService, private router: Router) {

   }

  ngOnInit() {
    

    this.coachname = localStorage.getItem('coachuser');
    this.userService.getCoachProfile(this.coachname).subscribe((data: Coach) => this.coachd = data);

  }


  onLogout(){
    localStorage.setItem('coachuser','');
    this.router.navigate(['/coach-auth']);
  }

  // onSubmit(form: NgForm) {
  
}
