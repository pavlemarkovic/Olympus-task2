import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';


import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LeftsideComponent } from './leftside/leftside.component';
import { LogoComponent } from './logo/logo.component';
import { ProfilHeaderComponent } from './profil-header/profil-header.component';
import { ProfilLeftbarComponent } from './profil-leftbar/profil-leftbar.component';
import { ProfilCenterComponent } from './profil-center/profil-center.component';
import { ProfilRightbarComponent } from './profil-rightbar/profil-rightbar.component';
import { ProfilCenterStatusComponent } from './profil-center-status/profil-center-status.component';
import { ProfilCenterPollComponent } from './profil-center-poll/profil-center-poll.component';
import { ProfilCenterBadplayComponent } from './profil-center-badplay/profil-center-badplay.component';
import { ProfilInfoComponent } from './profil-info/profil-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LeftsideComponent,
    LogoComponent,
    ProfilHeaderComponent,
    ProfilLeftbarComponent,
    ProfilCenterComponent,
    ProfilRightbarComponent,
    ProfilCenterStatusComponent,
    ProfilCenterPollComponent,
    ProfilCenterBadplayComponent,
    ProfilInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     // provider used to create fake backend
     fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
