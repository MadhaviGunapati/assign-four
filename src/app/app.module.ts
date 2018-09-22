import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MusicService } from './service/music.service';
import { RouterModule, Routes } from '@angular/router';
import { DatepipePipe } from './pipe/datepipe.pipe';
import {DatePipe} from '@angular/common';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SigninComponent},
  { path: ' ', redirectTo: '/login', pathMatch:'full'},
  { path: '**', redirectTo: '/login', pathMatch:'full'}
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    DatepipePipe
  ],
  
  providers: [
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
