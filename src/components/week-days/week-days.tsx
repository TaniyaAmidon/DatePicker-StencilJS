import { Component} from "@stencil/core";

@Component({
  tag: "week-days",
  styleUrl: "week-days.css",
  shadow: true
})

export class WeekDays {
    render() {
        return (
            <div class="dates">
                
              {[1,2,3,5,6,7,].map ( day => {
                return (
                  <div class="date">{day}</div>
                );
              })}
            </div>
        );
    }
}