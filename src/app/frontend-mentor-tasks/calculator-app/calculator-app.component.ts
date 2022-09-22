import { Component, OnInit } from '@angular/core';
import { ThemeToggleState } from './models/theme-toggle-state';

@Component({
  selector: 'app-calculator-app',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.scss'],
})
export class CalculatorAppComponent implements OnInit {
  something: boolean = false;
  currentTheme: ThemeToggleState = ThemeToggleState.ThemeOne;

  get getClassValue(): string {
    return this.currentTheme ?? ThemeToggleState.ThemeOne;
  }

  constructor() {}

  ngOnInit(): void {}

  setCurrentTheme(theme: ThemeToggleState) {
    this.currentTheme = theme;
  }

  value = '0';

  keyInputHandler(val: any): void {
    this.displayOnEmpty();
    this.value += val;
  }

  deleteButton() {
    this.value = this.value.slice(0, -1);
    console.log(this.value);
    this.displayOnEmpty();
  }
  resetButton() {
    this.value = '0';
  }
  calculateButton() {
    this.value = eval(this.value).toString();
  }

  displayOnEmpty() {
    if (this.value === '0') {
      this.value = '';
    } else if (this.value === '') {
      this.value = '0';
    }
  }
}
