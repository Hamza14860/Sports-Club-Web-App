import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//component imports
import { AdminModuleModule} from './admin-module/admin-module.module';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './service/user.service';
import { PlayerComponent } from './player/player.component';
import { GameSessionComponent } from './player/game-session/game-session.component';
import { FooterComponent } from './player/footer/footer.component';
import { NavbarComponent } from './player/navbar/navbar.component';
import { PlayerHomeComponent } from './player/player-home/player-home.component';
import { AttendanceComponent } from './player/game-session/attendance/attendance.component';
import { ChooseGamesComponent } from './player/game-session/choose-games/choose-games.component';
import { CheckScheduleComponent } from './player/game-session/check-schedule/check-schedule.component';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    HomeComponent,
    UserProfileComponent,
    SignInComponent,
    PlayerComponent,
    GameSessionComponent,
    FooterComponent,
    NavbarComponent,
    PlayerHomeComponent,
    AttendanceComponent,
    ChooseGamesComponent,
    CheckScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModuleModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
