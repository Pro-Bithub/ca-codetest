import {NgModule} from "@angular/core";

import {CalendarWidgetComponent} from "./calendar-widget/calendar-widget.component";
import {AppointmentsService} from "./services/appointments.service";
import {CalendarComponent} from "./calendar.component";
import {SmartadminModule} from "../shared/smartadmin.module";
import {calendarRouting} from "./calendar.routing";

@NgModule({
  imports: [
    SmartadminModule,
    calendarRouting,
  ],

  declarations: [
    CalendarWidgetComponent,
    CalendarComponent,
  ],
  exports: [
    CalendarWidgetComponent,
    CalendarComponent,
  ],
  providers: [AppointmentsService]
})
export class CalendarModule{}