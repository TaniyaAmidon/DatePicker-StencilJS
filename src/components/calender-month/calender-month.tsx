import { Component} from "@stencil/core";

@Component({
  tag: "calender-month",
  styleUrl: "calender-month.css",
  shadow: true
})


export class CalenderMonth {

  render() {
    return (
        <div>
          <div class="month-container">
          {['Mon','Tue','Wed', 'Thur','Fri','Sat','Sun'].map( day => {
            return (
               <div class="day">{day}</div>   
            );
          })}
          </div>
           <div class="weekday-container">
           <week-days></week-days>
           </div>
        </div>
      );
  }
}