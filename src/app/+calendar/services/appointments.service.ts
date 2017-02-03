import { Injectable } from '@angular/core';

import { APPOINTMENTS }from './appointments';

import { Subject } from "rxjs/Rx";


@Injectable()
export class AppointmentsService {

  public store: any = {
    appointments: APPOINTMENTS,
  };

  private subject;

  constructor() {
    this.subject = new Subject();
  }

  subscribe(next, error?, complete?) {
    return this.subject.subscribe(next, error, complete)
  }

  addAppointment(appointment) {
    appointment.id = this.generateId();
    this.store.appointments.push(appointment);
    this.subject.next(this.store);
  }

  getAppointment(id) {

  }

  updateAppointment(appointment) {

  }

  removeAppointment(id) {

  }

  generateId() {
    return Math.random().toString(36).slice(2)
  }
}
