import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss'],
})
export class NumberCardComponent implements OnInit {
  private _intervalTime: number;
  topBodyToggled: boolean = false;
  hiddenToggled: boolean = true;

  @Input() set intervalTime(val: number) {
    this._intervalTime = val;
    this.editIntervalTime();
    this.delayedTime();
    this.animationHandler();
  }

  get intervalTime(): number {
    return this._intervalTime;
  }

  constructor() {}

  ngOnInit(): void {}

  editedIntervalTime = '00';
  editedDelayedIntervalTime = '00';
  delayedTimeDisplayed = '00';

  delayedTime() {
    let delayedTimeShown = (this.intervalTime + 1).toString();
    if (delayedTimeShown.length === 1) {
      this.editedDelayedIntervalTime = '0' + delayedTimeShown;
    } else {
      this.editedDelayedIntervalTime = delayedTimeShown;
    }
  }

  editIntervalTime() {
    let fixedTime: string = this.intervalTime.toString();
    if (fixedTime.length === 1) {
      this.editedIntervalTime = '0' + fixedTime;
    } else {
      this.editedIntervalTime = fixedTime;
    }
  }

  animationHandler() {
    this.topBodyToggled = true;
    this.hiddenToggled = false;
    this.delayedTimeDisplayed = this.editedDelayedIntervalTime;
    setTimeout(() => {
      this.hiddenToggled = true;
      this.topBodyToggled = false;
    }, 1600);
    setTimeout(() => {
      this.delayedTimeDisplayed = this.editedIntervalTime;
    }, 1600);
  }
}
