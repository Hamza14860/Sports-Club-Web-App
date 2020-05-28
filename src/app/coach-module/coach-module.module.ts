import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../service/api.service'; //service file to handle crud operations

import { AppRoutingModule } from '../app-routing.module';

import { BrowserModule } from '@angular/platform-browser';

import { CoachAuthComponent } from './coach-auth/coach-auth.component';
import { CoachHomeComponent } from './coach-home/coach-home.component';
import { CoachScheduleComponent } from './coach-schedule/coach-schedule.component';
import { CoachRanksComponent } from './coach-ranks/coach-ranks.component';



@NgModule({
  declarations: [CoachAuthComponent, CoachHomeComponent, CoachScheduleComponent, CoachRanksComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CoachModuleModule { }
