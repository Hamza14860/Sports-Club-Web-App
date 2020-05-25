import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-game-session',
  templateUrl: './game-session.component.html',
  styleUrls: ['./game-session.component.css']
})
export class GameSessionComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }

  ngOnInit(): void {
    console.log("GameSession");
    this.router.navigateByUrl('/player/gamesession/attendance');

  }

}
