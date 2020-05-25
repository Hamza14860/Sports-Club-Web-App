import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-choose-games',
  templateUrl: './choose-games.component.html',
  styleUrls: ['./choose-games.component.css']
})
export class ChooseGamesComponent implements OnInit {
  gameForm:FormGroup;
  public time: string = null;


  games: string[] = [
    'Tennis', 'Badminton', 'Table Tennis', 'Squash'
  ];
  gameControl = new FormControl(this.games[0]);
  timeControl = new FormControl();

  constructor() {
    this.gameForm = new FormGroup({
      game: this.gameControl,
      time: this.timeControl

    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.gameControl.value);
    console.log(this.timeControl.value );

  }

}
