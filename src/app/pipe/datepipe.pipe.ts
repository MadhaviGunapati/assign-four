import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {
  transform(value: any): any {   
    console.log(value);
  
    let currentDate: any = moment(new Date());
    console.log(currentDate);   
    let userInput: any = moment(new Date(value));//.format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(userInput);
    var result = userInput.fromNow();
    //.getTime();

    //console.log(userInput.fromNow());
    //console.log(userInput.fromNow());
    //let result: any =currentDate.diff(userInput);
    //console.log(result);
    //let output: any = currentDate-userInput;
   
    
    
    //let resultDate : any = new Date(output);

    //console.log(resultDate);
    //let year: number = (userInput.getFullYear())-(currentDate.getFullYear());
    
    //console.log(year);
    //let months: any = resultDate.getMonth()-currentDate.getMonth();
    
    //console.log(months);
   /* let days: any = resultDate.getDay()-currentDate.getDay();
    
    console.log(days);
    let hours: any = resultDate.getHours()-currentDate.getHours();
   
    console.log(hours);
    let minutes: any = resultDate.getMinutes()-currentDate.getMinutes();   
    console.log(minutes);   
    let myDate: any = moment(resultDate); 
    
    //to get years 
    const years : number = myDate.get('years');
    console.log(years);*/
    //let y: number = moment.duration().subtract(year);
    //let x: number = parseInt(y);
   // console.log(x);
    return result;
  }

}
