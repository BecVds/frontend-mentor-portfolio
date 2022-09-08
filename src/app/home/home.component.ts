import { Component, OnInit } from '@angular/core';
import { ProjectCard } from './models/project-card';
import { SkillLevel } from './models/skill-level.enum';
import { Technologies } from './models/technologies.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projectCards: ProjectCard[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initProjectCards();
  }

  private initProjectCards(): void {
    this.projectCards = [
      {
        name: 'Project 1',
        description: 'This is just going to be a test description',
        image:
          '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
        skillLevel: SkillLevel.Intermediate,
        technologies: [Technologies.HTML, Technologies.CSS],
      },
      {
        name: 'Project 2',
        description: 'This is just going to be a test description',
        image:
          '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
        skillLevel: SkillLevel.Junior,
        technologies: [
          Technologies.HTML,
          Technologies.CSS,
          Technologies.JS,
          Technologies.API,
        ],
      },
      {
        name: 'Project 3',
        description: 'This is just going to be a test description',
        image:
          '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
        skillLevel: SkillLevel.Advanced,
        technologies: [Technologies.HTML, Technologies.CSS, Technologies.JS],
      },
      {
        name: 'Project 4',
        description: 'This is just going to be a test description',
        image:
          '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
        skillLevel: SkillLevel.Newbie,
        technologies: [Technologies.HTML, Technologies.CSS],
      },
      {
        name: 'Project 5',
        description: 'This is just going to be a test description',
        image:
          '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
        skillLevel: SkillLevel.Guru,
        technologies: [
          Technologies.HTML,
          Technologies.CSS,
          Technologies.JS,
          Technologies.API,
        ],
      },
    ];
  }
}
