import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { Router } from "@angular/router";
import { Session } from 'src/app/model/session.model';
import { NgForm ,FormControl, FormGroup  } from "@angular/forms";
import { Rank } from 'src/app/model/rank.model';
@Component({
  selector: 'app-coach-ranks',
  templateUrl: './coach-ranks.component.html',
  styleUrls: ['./coach-ranks.component.css']
})
export class CoachRanksComponent implements OnInit {
  gameForm:FormGroup;
  gameControl = new FormControl();
  playerControl = new FormControl();
  rankControl = new FormControl();
  constructor(public session:SessionService,public router:Router) {
    this.gameForm = new FormGroup({
      game: this.gameControl,
      cname: this.playerControl,
      rank: this.rankControl
    });
   }
  rank;
  schedules;
  coachuser;
  today;
  currdate;
  serverErrorMessages;
  showSucessMessage: Boolean;
  games: string[] = [
    'Tennis', 'Badminton', 'Table Tennis', 'Squash'
  ];
  ranks: string[] = [
    'Beginner', 'Medium', 'Advance'
  ];
  ngOnInit(): void {
    this.today = new Date();
    this.currdate = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    this.coachuser = localStorage.getItem('coachuser');
    this.session.getSession(this.currdate,this.coachuser).subscribe((data:Session[])=>this.schedules=data);
  }
  
  onSubmit(form: NgForm) {
    this.rank= new Rank(this.playerControl.value,this.gameControl.value,this.rankControl.value);
    this.session.addRank(this.rank).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
     
    
    //this.courtR.isFree = "False";
    this.router.navigate(['/coach-home']);
  }
  resetForm(form: NgForm) {
    this.session.selectedRank = {
      playerID: '',
      gameName: '',
      ranking: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
