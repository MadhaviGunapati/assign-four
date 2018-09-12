import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MusicService } from './service/music.service';
import { RouterModule, Routes } from '@angular/router';
//import { DatepipePipe } from './datepipe.pipe';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SigninComponent},
  { path: ' ', redirectTo: '/login', pathMatch:'full'},
  { path: '**', redirectTo: '/login', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
