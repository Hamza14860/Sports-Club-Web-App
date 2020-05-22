import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//component imports
import { AdminModuleModule} from './admin-module/admin-module.module';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './service/user.service';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    HomeComponent,
    UserProfileComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModuleModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
