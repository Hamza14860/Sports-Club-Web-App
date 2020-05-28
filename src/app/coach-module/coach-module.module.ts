import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachAuthComponent } from './coach-auth/coach-auth.component';
import { CoachHomeComponent } from './coach-home/coach-home.component';



@NgModule({
  declarations: [CoachAuthComponent, CoachHomeComponent],
  imports: [
    CommonModule
  ]
})
export class CoachModuleModule { }
