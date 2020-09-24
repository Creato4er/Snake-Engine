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

    // Records the movements of the snake and sends it to API
    // The corninates in the board that the snake went to.
    // The fruit cordinates generated.
    // The data will be sent once the game ends.
    recordSnakeMovements();
}