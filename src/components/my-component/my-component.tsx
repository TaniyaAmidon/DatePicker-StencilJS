import { Component, State } from '@stencil/core';
import moment from "moment";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * Today's date, as a starting point for the calendar
   */
  @State() startingDate: moment.Moment;

  /**
   * String Formatted user picked date
   */
  @State() pickedDate: string;

  constructor() {
    this.startingDate = moment();
  }

  private getDayNames(): string[] {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }

  private getHeaders(): any {
    return this.getDayNames().map(name => {
      return <th>{name}</th>;
    })
  }

  private calendarRow(dayCell: any): any {
    return (<tr>{dayCell}</tr>);
  }

  private calendarDays(date: moment.Moment, dayNum: number): any {
    let currMonth = date.month();
    return this.getDayNames().map(() => {
      let wd = moment(date).weekday(dayNum++);
      let d = wd.date();
      let m = wd.month();
      let y = wd.year();
      if(m != currMonth) {
        return <td class="not-current-month" onClick={this.setPickedDate(d, m, y)}>{d}</td>
      }

      return <td onClick={this.setPickedDate(d, m, y)}>{d}</td>;
    })
  }

  private getCalendar(date: moment.Moment): any {
    let calendar = [];
    let dayNum = 0;
    let numRows = 5;
    // add an extra row if first of the month is a saturday
    // but not a sunday
    let first = date.startOf('month');
    if(first.day() % 6 === 0 && first.day() != 0) {
      numRows += 1;
    }

    for(let i=1; i <= numRows; i++) {
      calendar.push(this.calendarRow(this.calendarDays(date, dayNum)));
      dayNum += this.getDayNames().length;
      if((dayNum === 30 || dayNum === 31) && i === numRows) {
        calendar.push(this.calendarRow(this.calendarDays(date, dayNum)));
      }
    }

    return calendar;
  }

  private prevMonth() {
    this.startingDate = moment(this.startingDate).date(1).subtract(1, "months");
  }

  private nextMonth() {
    this.startingDate = moment(this.startingDate).date(1).add(1, "months");
  }

  private setPickedDate(d: number, m: number, y: number) {
    return () => {
      let date = new Date(y, m, d);
      this.pickedDate = moment(date).format("DD-MMMM-YYYY");  
    }
  }

  render() {
    return (
      <div class="calendar">
        <div>Month: {this.startingDate.format("MMMM")}</div>
        <div>Year: {this.startingDate.year()}</div>
        <table>
          <tr>
            {this.getHeaders()}
          </tr>
          {this.getCalendar(this.startingDate)}
        </table>
        <div class="button-container">
          <button onClick={() => this.prevMonth()}>prev month</button>
          <button onClick={() => this.nextMonth()}>next month</button>
        </div>
        <div>Date chosen: {this.pickedDate}</div>
      </div>
    );
  }
}
