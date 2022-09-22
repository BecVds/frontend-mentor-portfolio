import { Component, Input, OnInit } from '@angular/core';
import { MainDisplayCard } from '../models/main-display-card';

@Component({
  selector: 'app-main-display-card',
  templateUrl: './main-display-card.component.html',
  styleUrls: ['./main-display-card.component.scss'],
})
export class MainDisplayCardComponent implements OnInit {
  @Input() mainDisplayCard: MainDisplayCard = {} as MainDisplayCard;

  constructor() {}

  ngOnInit(): void {}
}
