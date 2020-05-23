import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { IDropdownSettings } from 'ng-multiselect-dropdown';  


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;

  dropdownList = [   { item_id: 1, item_text: 'Mumbai' },
  { item_id: 2, item_text: 'Bangaluru' },
  { item_id: 3, item_text: 'Pune' },
  { item_id: 4, item_text: 'Navsari' },
  { item_id: 5, item_text: 'New Delhi' }];
  selectedItems = [ { item_id: 2, item_text: 'Bangaluru' }];
  dropdownSettings:IDropdownSettings = {singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true};

  constructor(private userService: UserService, private router: Router) {
   }

  ngOnInit() {
    
    //
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    //
    
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];

        
      },
      err => { 
        console.log(err);
        
      }
    );

  }

  //
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  //

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


  onSubmit(form: NgForm) {
    
  }

}
