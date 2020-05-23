import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getPlayerHome().subscribe(
      res => {
        this.userDetails = res['user'];
        this.navToPlayerHome();
      },
      err => { 
        console.log(err);
        
      }
    );

  }

  navToPlayerHome(){
   // this.router.navigate(['/playerhome']);
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
    environment.navCheck = false;

  }

}
