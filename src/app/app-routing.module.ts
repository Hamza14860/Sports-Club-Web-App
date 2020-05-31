import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AdminHomeComponent} from './admin-module/admin-home/admin-home.component';

import { AdminAuthComponent} from './admin-module/admin-auth/admin-auth.component';
import { NotificationComponent} from './admin-module/notification/notification.component';
import { ScheduleComponent} from './admin-module/schedule/schedule.component';
import { AddDataComponent} from './admin-module/add-data/add-data.component';
import { AddPlayerComponent} from './admin-module/add-player/add-player.component';
import { CrudCompComponent} from './admin-module/crud-comp/crud-comp.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {UserComponent} from './user/user.component';

import {HomeComponent} from './home/home.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { PlayerComponent } from './player/player.component';
import { PlayerHomeComponent } from './player/player-home/player-home.component';
import { GameSessionComponent } from './player/game-session/game-session.component';
import { AttendanceComponent } from './player/game-session/attendance/attendance.component';
import { ChooseGamesComponent } from './player/game-session/choose-games/choose-games.component';
import { CheckScheduleComponent } from './player/game-session/check-schedule/check-schedule.component';


import { AuthGuard } from './auth/auth.guard';
import { NavbarComponent } from './player/navbar/navbar.component';
import { FooterComponent } from './player/footer/footer.component';
import { User } from './model/user.model';
import {CoachAuthComponent} from './coach-module/coach-auth/coach-auth.component';
import {CoachHomeComponent} from './coach-module/coach-home/coach-home.component';
import {CoachRanksComponent} from './coach-module/coach-ranks/coach-ranks.component';
import {SchedComponent} from './coach-module/sched/sched.component';





const routes: Routes = [
  { path: 'admin-home', component: AdminHomeComponent } ,
  { path: 'home', component: HomeComponent } ,

  { path: 'add-coach', component: AddDataComponent } ,

  { path: 'add-player', component: AddPlayerComponent } ,

  { path: 'admin-view', component: CrudCompComponent } ,

  { path: 'admin-auth', component: AdminAuthComponent } ,

  { path: 'notifications', component: NotificationComponent } , 

  { path: 'schedule', component: ScheduleComponent } , 

  { path: 'coach-auth', component: CoachAuthComponent } ,
  { path: 'coach-home', component: CoachHomeComponent } ,
  { path: 'coach-rank', component: CoachRanksComponent } ,
  { path: 'coach-sched', component: SchedComponent } ,


  { 
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent}]
  },
  { 
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent}]
  },
  
  { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },


  { path: 'player', 
  component: PlayerComponent, 
  canActivate: [AuthGuard],
  children: [
    {path: 'playerhome', component:PlayerHomeComponent},
    {path: 'navbar', component:NavbarComponent},
    {path: 'footer', component:FooterComponent},

    {path: 'gamesession', 
    component:GameSessionComponent,
    children:[
    {path: 'attendance', component:AttendanceComponent},
    {path: 'choosegame', component:ChooseGamesComponent},
    {path: 'checkschedule', component:CheckScheduleComponent}
    ]},

    {path: 'userprofile', component:UserProfileComponent, canActivate: [AuthGuard]},

  ]
   },


  // { 
  //   path: 'playerhome', component: PlayerComponent,
  //   children: [{ path: '', component: PlayerHomeComponent}]
  // },
  // { 
  //   path: 'gamesession', component: PlayerComponent,
  //   children: [{ path: '', component: GameSessionComponent,}]
  // },
  // { 
  //   path: 'userprofile', component: PlayerComponent,
  //   children: [{ path: '', component: UserProfileComponent, canActivate: [AuthGuard] }]
  // },
  // { 
  //   path: 'attendance', component: GameSessionComponent,
  //   children: [{ path: '', component: AttendanceComponent}]
  // },
  // { 
  //   path: 'choosegames', component: GameSessionComponent,
  //   children: [{ path: '', component: ChooseGamesComponent}]
  // },
  // { 
  //   path: 'checkschedule', component: GameSessionComponent,
  //   children: [{ path: '', component: CheckScheduleComponent}]
  // },



  {
    path: '',  redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
