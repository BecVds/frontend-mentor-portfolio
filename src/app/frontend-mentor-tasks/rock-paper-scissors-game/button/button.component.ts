import { Component, Input, OnInit } from '@angular/core';
import { OptionButton } from '../models/option-button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() option: OptionButton | undefined;

  constructor() {}

  ngOnInit(): void {}
}
