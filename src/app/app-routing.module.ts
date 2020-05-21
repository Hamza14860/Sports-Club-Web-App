import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { PlayerCreateComponent } from './admin-module/player-create/player-create.component';
import { PlayerEditComponent } from './admin-module/player-edit/player-edit.component';
import { PlayerListComponent } from './admin-module/player-list/player-list.component';
import { AdminHomeComponent} from './admin-module/admin-home/admin-home.component';


const routes: Routes = [
  { path: 'admin-home', component: AdminHomeComponent } ,
  // { path: '', pathMatch: 'full', redirectTo: 'create-player' },
  { path: 'create-player', component: PlayerCreateComponent },
  { path: 'edit-player/:id', component: PlayerEditComponent },
  { path: 'players-list', component: PlayerListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
