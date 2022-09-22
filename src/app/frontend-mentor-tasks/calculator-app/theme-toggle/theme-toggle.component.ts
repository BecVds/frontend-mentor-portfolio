import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeToggleState } from '../models/theme-toggle-state';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
  currentActiveTheme: ThemeToggleState = ThemeToggleState.ThemeOne;

  @Output() themeChanged: EventEmitter<ThemeToggleState> =
    new EventEmitter<ThemeToggleState>();

  get activeThemeClass(): string {
    return this.currentActiveTheme;
  }

  constructor() {}

  ngOnInit(): void {}

  toggleSelectedClickHandler() {
    if (this.currentActiveTheme === ThemeToggleState.ThemeOne) {
      this.currentActiveTheme = ThemeToggleState.ThemeTwo;
    } else if (this.currentActiveTheme === ThemeToggleState.ThemeTwo) {
      this.currentActiveTheme = ThemeToggleState.ThemeThree;
    } else if (this.currentActiveTheme === ThemeToggleState.ThemeThree) {
      this.currentActiveTheme = ThemeToggleState.ThemeOne;
    }

    this.themeChanged.emit(this.currentActiveTheme);
  }
}
