import { Component } from '@angular/core';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrl: './timeslot.component.css'
})

export class TimeslotComponent {
  selectedDate: Date | null = null;
  startTime: Date | null = null;
  endTime: Date | null = null;

  timeSlotList: any = [];

  onSubmit() {
    this.timeSlotList.push({selectedDate: this.selectedDate, startTime: this.startTime, 
      endTime: this.endTime});
      this.startTime = null;
      this.endTime = null;
      this.selectedDate = null;
  }
}
