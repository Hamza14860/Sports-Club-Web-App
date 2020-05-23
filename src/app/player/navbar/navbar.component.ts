import { Component, OnInit,AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit,AfterViewInit  {
  @ViewChild('homeNav') myDiv: ElementRef<HTMLElement>;

  // @ViewChild('homeNav') divClick: ElementRef;
  constructor(private userService: UserService, private router: Router) { }

  ngAfterViewInit(){
    this.triggerFalseClick();
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.divClick.nativeElement.click();
    //   }, 200);

  }

triggerFalseClick() {
    let el: HTMLElement = this.myDiv.nativeElement;
    el.click();
}

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
