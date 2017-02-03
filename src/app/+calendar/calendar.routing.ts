import {RouterModule, Routes} from "@angular/router";
import {CalendarComponent} from "./calendar.component";

export const calendarRoutes: Routes = [
  {
    path: '',
    component: CalendarComponent,
    data: {pageTitle: 'Calendar'}
  },
];

export const calendarRouting = RouterModule.forChild(calendarRoutes);