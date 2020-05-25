import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-session',
  templateUrl: './game-session.component.html',
  styleUrls: ['./game-session.component.css']
})
export class GameSessionComponent implements OnInit {

  constructor() {    console.log("GameSession");
}

  ngOnInit(): void {
    console.log("GameSession");
  }

}
