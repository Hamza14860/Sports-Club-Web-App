import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../service/user.service';
import { CoachService } from '../../service/coach.service';
import { User } from '../../model/user.model';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coach } from 'src/app/model/coach.model';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-crud-comp',
  templateUrl: './crud-comp.component.html',
  styleUrls: ['./crud-comp.component.css']
})
export class CrudCompComponent implements OnInit {

  constructor(private http: HttpClient,private userService: UserService, private coachService: CoachService,private router : Router) { }
  users;
  coaches;
  serverErrorMessages: string;
  value:String = 'player';
  ngOnInit(): void {
    //this.users = this.userService.getUsers();

    
    this.userService.getUsers().subscribe((data: User[]) => this.users = data);
    this.coachService.getCoaches().subscribe((data: Coach[]) => this.coaches = data);

  }

  shPlayer():void{
    this.value = 'player';
  }

  shCoach():void{
    this.value = 'coach';
  }

  shCreate():void{
    this.router.navigate(['/add-coach']);
  }


  userDelete(id:string){
    this.userService.deleteProfile(id).subscribe(
      res => {
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
    this.ngOnInit();
    this.router.navigate(['/admin-view']);
  }

  userUpdate(id:string){
    
  }

  coachDelete(id:string){

    this.coachService.deleteProfile(id).subscribe(
      res => {
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
    this.ngOnInit();
    this.router.navigate(['/admin-view']);

  }

  coachUpdate(id:string){
    
  }

}
