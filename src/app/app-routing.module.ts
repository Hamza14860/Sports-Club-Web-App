import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AdminHomeComponent} from './admin-module/admin-home/admin-home.component';

import {SignUpComponent} from './user/sign-up/sign-up.component';
import {UserComponent} from './user/user.component';

import {HomeComponent} from './home/home.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  { path: 'admin-home', component: AdminHomeComponent } ,

  { 
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent}]
  },
  { 
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent}]
  },
  { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },

  { path: 'home', component: HomeComponent } ,

  {
    path: '',  redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
