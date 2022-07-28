import { Injectable } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyCountRequest = 0;

  constructor(private loadingSpinnerService: NgxSpinnerService) {}

  busy() {
    this.busyCountRequest++;
    this.loadingSpinnerService.show(undefined, {
      type: 'ball-scale-multiple',
      size: 'large',
      bdColor: 'rgba(0, 0, 0, 1)',
    });
    console.log('Busy Method in Busy Service is called');
  }

  idle() {
    this.busyCountRequest--;
    if (this.busyCountRequest <= 0) {
      this.busyCountRequest = 0;
      this.loadingSpinnerService.hide();
      console.log('Idle, progess spinner Must be hidder here');
    }
  }
}
