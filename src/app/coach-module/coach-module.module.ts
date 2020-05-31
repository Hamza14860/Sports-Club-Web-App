import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../service/api.service'; //service file to handle crud operations

import { AppRoutingModule } from '../app-routing.module';

import { BrowserModule } from '@angular/platform-browser';

import { CoachAuthComponent } from './coach-auth/coach-auth.component';
import { CoachHomeComponent } from './coach-home/coach-home.component';
import { SchedComponent } from './sched/sched.component';
import { CoachRanksComponent } from './coach-ranks/coach-ranks.component';
import {MatSelectModule} from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CoachAuthComponent,SchedComponent ,CoachHomeComponent,CoachRanksComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CoachModuleModule { }
