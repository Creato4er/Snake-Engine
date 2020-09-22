import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';
import { Board } from './board.interface';

export interface SnakeEngine {
    // To-do: find out the interface type for this.
    startTime: any;
    endTime: any;
    points: number;
    board: Board;

    startGame(): void; // Creates a board.
    endGame(): void;
    pauseGame(): void;
}