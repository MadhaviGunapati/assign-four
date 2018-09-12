import { Component } from '@angular/core';
import { MusicService } from "./service/music.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign-four';
  music: any[];
  myDate: number = Date.now(); 


}
