import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ALL_OPTIONS } from '../data/all-options';
import { GameMode } from '../models/game-mode-state';
import { OptionButton } from '../models/option-button';
import { GameLogicService } from '../services/game-logic.service';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss'],
})
export class SelectionButtonsComponent implements OnInit {
  private subscriptionControl: Subject<void> = new Subject<void>();
  allOptions: OptionButton[] = [];

  paperOption: OptionButton | undefined;
  rockOption: OptionButton | undefined;
  scissorsOption: OptionButton | undefined;
  spockOption: OptionButton | undefined;
  lizardOption: OptionButton | undefined;

  playerSelectedOption: string = '';

  @Output() outputplayerSelection: EventEmitter<string> = new EventEmitter();

  constructor(private gameLogicService: GameLogicService) {}

  gameMode: GameMode;

  get GameModeChosen(): boolean {
    return this.gameMode === GameMode.normal;
  }

  ngOnInit(): void {
    this.initGameState();
    this.allOptions = ALL_OPTIONS;
    this.initAllOptions();
    setTimeout(() => {
      console.log(this.gameMode);
    }, 2000);
  }

  private initAllOptions(): void {
    this.paperOption = this.allOptions.find(
      (option) => option.name === 'Paper'
    );
    this.rockOption = this.allOptions.find((option) => option.name === 'Rock');
    this.scissorsOption = this.allOptions.find(
      (option) => option.name === 'Scissors'
    );
    this.spockOption = this.allOptions.find(
      (option) => option.name === 'Spock'
    );
    this.lizardOption = this.allOptions.find(
      (option) => option.name === 'Lizard'
    );
  }

  playerChoice(playerChosen: OptionButton): void {
    this.playerSelectedOption = playerChosen.name;
    this.gameLogicService.selectOption(playerChosen);
    this.outputplayerSelection.emit(this.playerSelectedOption);
  }

  ngOnDestroy(): void {
    this.subscriptionControl.next();
    this.subscriptionControl.complete();
  }

  private initGameState(): void {
    this.gameLogicService.gameMode
      .pipe(takeUntil(this.subscriptionControl))
      .subscribe({
        next: (gameMode) => {
          this.gameMode = gameMode;
        },
      });
  }
}
