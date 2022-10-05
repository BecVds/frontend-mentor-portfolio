import { Component, OnInit, OnDestroy } from '@angular/core';
import { Outcomes } from './models/outcomes';
import { GameLogicService } from './services/game-logic.service';
import { Subject, takeUntil } from 'rxjs';
import { GameMode } from './models/game-mode-state';

@Component({
  selector: 'app-rock-paper-scissors-game',
  templateUrl: './rock-paper-scissors-game.component.html',
  styleUrls: ['./rock-paper-scissors-game.component.scss'],
})
export class RockPaperScissorsGameComponent implements OnInit, OnDestroy {
  private subscriptionControl: Subject<void> = new Subject<void>();
  gameState: Outcomes;
  score: number;
  gameMode: GameMode;
  gameModeButtonText: string = '';

  rulesDisplayed: boolean = false;

  get gameInProgress(): boolean {
    return this.gameState === Outcomes.inProgress;
  }

  constructor(private gameLogicService: GameLogicService) {}

  ngOnInit(): void {
    this.initGameState();
    this.initScore();
    this.initGameMode();
  }

  ngOnDestroy(): void {
    this.subscriptionControl.next();
    this.subscriptionControl.complete();
  }

  toggleDisplayRules() {
    this.rulesDisplayed = !this.rulesDisplayed;
  }

  toggleGameMode() {
    if (this.gameMode === GameMode.normal) {
      this.gameLogicService.gameMode.next(GameMode.advanced);
    } else {
      this.gameLogicService.gameMode.next(GameMode.normal);
    }
  }

  private initGameState(): void {
    this.gameLogicService.gameOutcome
      .pipe(takeUntil(this.subscriptionControl))
      .subscribe({
        next: (gameState) => {
          this.gameState = gameState;
        },
      });
  }

  private initScore(): void {
    this.gameLogicService.score
      .pipe(takeUntil(this.subscriptionControl))
      .subscribe({
        next: (score) => {
          this.score = score;
        },
      });
  }
  private initGameMode(): void {
    this.gameLogicService.gameMode
      .pipe(takeUntil(this.subscriptionControl))
      .subscribe({
        next: (gameMode) => {
          this.gameMode = gameMode;
          if (this.gameMode === GameMode.advanced) {
            this.gameModeButtonText = 'Normal game';
          } else if (this.gameMode === GameMode.normal) {
            this.gameModeButtonText = 'Lizard Spock mode';
          }
        },
      });
  }
}
