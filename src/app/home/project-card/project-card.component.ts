import { Component, OnInit, Input } from '@angular/core';
import { ProjectCard } from '../models/project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() projectCard: ProjectCard = {} as ProjectCard;

  constructor() {}

  ngOnInit(): void {}
}
