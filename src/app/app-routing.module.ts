import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AdminHomeComponent} from './admin-module/admin-home/admin-home.component';

import { AdminAuthComponent} from './admin-module/admin-auth/admin-auth.component';

import { AddDataComponent} from './admin-module/add-data/add-data.component';
import { AddPlayerComponent} from './admin-module/add-player/add-player.component';
import { CrudCompComponent} from './admin-module/crud-comp/crud-comp.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {UserComponent} from './user/user.component';

import {HomeComponent} from './home/home.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
  { path: 'admin-home', component: AdminHomeComponent } ,

  { path: 'add-coach', component: AddDataComponent } ,

  { path: 'add-player', component: AddPlayerComponent } ,

  { path: 'admin-view', component: CrudCompComponent } ,

  { path: 'admin-auth', component: AdminAuthComponent } ,

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
