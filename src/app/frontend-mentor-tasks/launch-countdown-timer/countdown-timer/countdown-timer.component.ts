import { Component, Input, OnInit } from '@angular/core';
import { TimeState } from './models/time-state';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  constructor() {}

  @Input() timeInterval: TimeState = {} as TimeState;

  ngOnInit(): void {
    this.updateTimer();
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  countDownDate = new Date('Nov 5, 2022 15:37:25').getTime();

  updateTimer() {
    let now = new Date().getTime();

    let distance = this.countDownDate - now;

    this.timeInterval.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.timeInterval.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.timeInterval.minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.timeInterval.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // console.log(
    //   'days:' +
    //     this.timeInterval.days +
    //     ' hours:' +
    //     this.timeInterval.hours +
    //     ' minutes:' +
    //     this.timeInterval.minutes +
    //     ' seconds:' +
    //     this.timeInterval.seconds
    // );
  }
}
