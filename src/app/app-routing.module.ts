import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// import { PlayerCreateComponent } from './admin-module/player-create/player-create.component';
// import { PlayerEditComponent } from './admin-module/player-edit/player-edit.component';
// import { PlayerListComponent } from './admin-module/player-list/player-list.component';
import { AdminHomeComponent} from './admin-module/admin-home/admin-home.component';

import {SignUpComponent} from './user/sign-up/sign-up.component';
import {UserComponent} from './user/user.component';

import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'admin-home', component: AdminHomeComponent } ,

  // { path: '', pathMatch: 'full', redirectTo: 'create-player' },
  // { path: 'create-player', component: PlayerCreateComponent },
  // { path: 'edit-player/:id', component: PlayerEditComponent },
  // { path: 'players-list', component: PlayerListComponent } ,


  { 
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent}]
  },
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
