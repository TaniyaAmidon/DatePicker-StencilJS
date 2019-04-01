import { Component} from "@stencil/core";

@Component({
    tag: "date-picker",
    styleUrl: "date-picker.css",
    shadow: true
})

export class DatePicker {
    render() {
        return (
            <div class="container">
                <div class="date-picker">
                    <div class="month-title">{"April"}</div>
                    <div class="month">
                    <calender-month></calender-month>
                    </div>   
                </div>  
            </div>          
        );
    }
}