import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'assign-four';
  music: any[];
  userInput: any = '10-10-2013';
  localTime: String = "12/12/2016 12:30 PM";
  language : String;
  today : any = new Date();  
}