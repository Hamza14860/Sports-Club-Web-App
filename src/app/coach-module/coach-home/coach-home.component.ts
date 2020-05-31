import { Component, OnInit } from '@angular/core';
import { CoachService } from '../../service/coach.service';
import { Router } from "@angular/router";
import { FormGroup } from '@angular/forms';
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

  onRanks(){
    this.router.navigate(['/coach-rank']);
  }
  onSchedule(){
    this.router.navigate(['/coach-sched']);
  }

  // onSubmit(form: NgForm) {
  
}
