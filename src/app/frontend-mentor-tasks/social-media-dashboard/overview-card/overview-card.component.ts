import { Component, OnInit, Input } from '@angular/core';
import { OverviewCard } from '../models/overview-card';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss'],
})
export class OverviewCardComponent implements OnInit {
  @Input() overviewCard: OverviewCard = {} as OverviewCard;

  constructor() {}

  ngOnInit(): void {}
}
