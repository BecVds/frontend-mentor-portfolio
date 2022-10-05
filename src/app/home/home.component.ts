import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ALL_FRONTEND_MENTOR_TASKS } from './data/all-frontend-mentor-tasks';
import { ProjectCard } from './models/project-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projectCards: ProjectCard[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initProjectCards();
  }

  onCardClick(route: string): void {
    this.router.navigateByUrl(route);
  }

  private initProjectCards(): void {
    this.projectCards = ALL_FRONTEND_MENTOR_TASKS;
    this.sortCards(false);
  }

  private sortCards(asc: boolean): void {
    this.projectCards = this.projectCards.sort(
      (a, b) => (a.skillNumber - b.skillNumber) * (asc ? -1 : 1)
    );
  }
}
