import { Component } from "@stencil/core";
import moment from "moment";

@Component({
  tag: "test-1",
  shadow: true
})
export class Test1  {
    numDays: any;
    daysWeek: any;
    constructor() {
    }

    getDaysWeek() {
      return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }

    getDayOfWeek(day: number, month: number, year: number) {
      let d = new Date(year, month, day);
      return d.getDay();
    }

    displayDays(days: number) {
        let daysToDisplay = [];
        for(let i=1; i <= days; i++) {
            daysToDisplay.push(i);
        }
        return daysToDisplay;
    }
  
    getDaysInMonth(month: number, year: number) {
      return new Date(year, month, 0).getDate();
    }

    displayDatePicker() {
      let today = new Date();
      let m = today.getMonth() + 1;
      let y = today.getFullYear();
      this.numDays = this.getDaysInMonth(m, y)
      this.daysWeek = this.getDaysWeek();

      console.log(moment());
            
      let datePickerContainer = [];
      datePickerContainer.push(<table>);

      datePickerContainer.push(<tr>);
      {/* for(let i=0; i < this.daysWeek.length; i++) {
        datePickerContainer.push(<th>{this.daysWeek[i]}</th>);
      }
      datePickerContainer.push(</tr>);

      let firstDayOfMonth = new Date(y, m, 1);
      let firstDayOfMonthWeek = moment(firstDayOfMonth);
      //let dayOfWeek = this.getDayOfWeek(1, m, y);
      
      for(let i=0; i < 4; i++) {
        datePickerContainer.push(<tr>);

        for(let j=0; j < this.daysWeek.length; j++) {
          datePickerContainer.push(<td>);
          datePickerContainer.push(<span>firstDayOfMonthWeek.day(j)</span>);
          datePickerContainer.push(</td>);
        }

        datePickerContainer.push(</tr>);
      } */}
      datePickerContainer.push(</tr>);
      datePickerContainer.push(</table>);
      return datePickerContainer;
    }

  render() {
    return (
        <div>{this.displayDatePicker()}</div>
        // <div>{this.displayDays(this.numDays)}</div>
    );
  }
}