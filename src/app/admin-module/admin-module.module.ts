import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
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
import { AddDataComponent } from './add-data/add-data.component';
import { CrudCompComponent } from './crud-comp/crud-comp.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { UpdateCoachComponent } from './update-coach/update-coach.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { NotificationComponent } from './notification/notification.component';
import { ScheduleComponent } from './schedule/schedule.component';




@NgModule({
  declarations: [
    AdminHomeComponent,
    AddDataComponent,
    CrudCompComponent,
    AddPlayerComponent,
    UpdatePlayerComponent,
    UpdateCoachComponent,
    AdminAuthComponent,
    NotificationComponent,
    ScheduleComponent,
  // PlayerCreateComponent,
  // PlayerEditComponent,
  // PlayerListComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
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



