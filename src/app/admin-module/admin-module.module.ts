import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//
import { AdminHomeComponent } from '../admin-module/admin-home/admin-home.component';

// import { PlayerCreateComponent } from '../admin-module/player-create/player-create.component';
// import { PlayerEditComponent } from '../admin-module/player-edit/player-edit.component';
// import { PlayerListComponent } from '../admin-module/player-list/player-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../service/api.service'; //service file to handle crud operations

import { AppRoutingModule } from '../app-routing.module';

import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AdminHomeComponent,
  // PlayerCreateComponent,
  // PlayerEditComponent,
  // PlayerListComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  exports: [
    AdminHomeComponent, 
    // PlayerCreateComponent, 
    // PlayerEditComponent,
    // PlayerListComponent
  ],
  providers: [ApiService]
})
export class AdminModuleModule { }
