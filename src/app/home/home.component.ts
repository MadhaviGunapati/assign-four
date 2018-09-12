import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: String = "$$$ MUSIC $$$";
  music: any[];
  constructor(private _musicService:MusicService) { 
    
  }

  ngOnInit(): void {
    this.music = this._musicService.getMusic();
  }

}
