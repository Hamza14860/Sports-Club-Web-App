import { Component, OnInit,AfterViewInit,OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit,AfterViewInit,OnDestroy  {
  @ViewChild('homeNav') myDiv: ElementRef<HTMLElement>;

  // @ViewChild('homeNav') divClick: ElementRef;
  constructor(private userService: UserService, private router: Router) { }

  ngAfterViewInit(){
    if (environment.navCheck == false){
      this.triggerFalseClick();
    }
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.divClick.nativeElement.click();
    //   }, 200);

  }
  ngOnDestroy(){
    console.log(environment.navCheck);
    environment.navCheck = true;
  }

triggerFalseClick() {
    let el: HTMLElement = this.myDiv.nativeElement;
    el.click();
}

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
    environment.navCheck = false;

  }
 
}
