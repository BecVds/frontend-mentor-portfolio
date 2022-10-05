import { Injectable } from '@angular/core';
import { ALL_OPTIONS } from '../data/all-options';
import { OptionButton } from '../models/option-button';
import { BehaviorSubject } from 'rxjs';
import { Outcomes } from '../models/outcomes';
import { GameMode } from '../models/game-mode-state';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  private readonly allChoices: OptionButton[] = ALL_OPTIONS;
  gameOutcome: BehaviorSubject<Outcomes> = new BehaviorSubject<Outcomes>(
    Outcomes.inProgress
  );
  score: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  gameMode: BehaviorSubject<GameMode> = new BehaviorSubject<GameMode>(
    GameMode.advanced
  );

  playerChoice: OptionButton;
  computerChoice: OptionButton;
  calcScore: number = 0;
  gameModeState: GameMode = GameMode.advanced;

  constructor() {}

  selectOption(option: OptionButton) {
    this.playerChoice = option;
    if (this.gameMode.getValue() === GameMode.normal) {
      this.makeComputerChoice(3);
    } else if (this.gameMode.getValue() === GameMode.advanced) {
      this.makeComputerChoice(5);
    }
  }

  resetGame(): void {
    this.gameOutcome.next(Outcomes.inProgress);
  }

  private makeComputerChoice(gameModeNumber: number) {
    let choice = Math.floor(Math.random() * gameModeNumber);
    this.computerChoice = this.allChoices[choice];

    this.detectWinner();
  }

  private detectWinner(): void {
    if (this.playerChoice.winAgainst.includes(this.computerChoice.id)) {
      this.gameOutcome.next(Outcomes.win);
      this.calcScore += 1;
      this.score.next(this.calcScore);
    } else if (this.playerChoice.id === this.computerChoice.id) {
      this.gameOutcome.next(Outcomes.draw);
    } else {
      this.gameOutcome.next(Outcomes.lose);
      this.calcScore -= 1;
      this.score.next(this.calcScore);
    }
  }
}
