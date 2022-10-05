import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameLogicService } from '../services/game-logic.service';
import { Subject, takeUntil } from 'rxjs';
import { Outcomes } from '../models/outcomes';

@Component({
  selector: 'app-selected-buttons',
  templateUrl: './selected-buttons.component.html',
  styleUrls: ['./selected-buttons.component.scss'],
})
export class SelectedButtonsComponent implements OnInit {
  private subscriptionControl: Subject<void> = new Subject<void>();
  playerChoice = this.gameLogicService.playerChoice;
  computerChoice = this.gameLogicService.computerChoice;
  gameState: Outcomes;

  constructor(private gameLogicService: GameLogicService) {}

  ngOnInit(): void {
    this.initGameState();
  }

  resetGame(): void {
    this.gameLogicService.resetGame();
  }

  ngOnDestroy(): void {
    this.subscriptionControl.next();
    this.subscriptionControl.complete();
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
}
