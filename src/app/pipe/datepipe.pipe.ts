import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {
  transform(value: any): any {   
    console.log(value);
  
    let currentDate: any = moment(new Date());
    console.log(currentDate);   
    let userInput: any = moment(new Date(value));
    console.log(userInput);
    var result = userInput.fromNow();  
    return result;
  }

}
