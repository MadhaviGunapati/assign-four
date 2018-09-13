import { Component } from '@angular/core';
import { MusicService } from "./service/music.service";

//import { Pipe, PipeTransform } from "./pipe/datepipe.pipe";
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign-four';
  music: any[];
  userInput: any = '10-10-2013';
  today : any = new Date();
  
}