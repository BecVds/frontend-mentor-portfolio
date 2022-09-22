import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ALL_MAIN_DISPLAY_CARDS } from './data/all-main-display-cards';
import { ALL_OVERVIEW_CARDS } from './data/all-overview-cards';
import { MainDisplayCard } from './models/main-display-card';
import { OverviewCard } from './models/overview-card';
import { ThemeToggleState } from './models/toggle-state';

@Component({
  selector: 'app-social-media-dashboard',
  templateUrl: './social-media-dashboard.component.html',
  styleUrls: ['./social-media-dashboard.component.scss'],
})
export class SocialMediaDashboardComponent implements OnInit {
  overviewCards: OverviewCard[] = [];
  mainDisplayCards: MainDisplayCard[] = [];
  currentActiveTheme: ThemeToggleState = ThemeToggleState.ThemeOne;

  @Output() themeChanged: EventEmitter<ThemeToggleState> =
    new EventEmitter<ThemeToggleState>();

  get activeThemeClass(): string {
    return this.currentActiveTheme ?? ThemeToggleState.ThemeOne;
  }

  constructor() {}

  ngOnInit(): void {
    this.initOverviewCards();
    this.initMainDisplayCards();
  }

  toggleSelectedClickHandler() {
    if (this.currentActiveTheme === ThemeToggleState.ThemeOne) {
      this.currentActiveTheme = ThemeToggleState.ThemeTwo;
    } else if (this.currentActiveTheme === ThemeToggleState.ThemeTwo) {
      this.currentActiveTheme = ThemeToggleState.ThemeOne;
    }

    this.themeChanged.emit(this.currentActiveTheme);
    console.log(this.currentActiveTheme);
  }

  private initOverviewCards(): void {
    this.overviewCards = ALL_OVERVIEW_CARDS;
  }
  private initMainDisplayCards(): void {
    this.mainDisplayCards = ALL_MAIN_DISPLAY_CARDS;
  }
}
