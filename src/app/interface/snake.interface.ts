import { SnakeList } from 'src/shared/linkedList.class';
import { Cordinate } from './cordinate.interface';
import { Movement } from './movement.interface';

export interface ISnake {
    snakeBody: SnakeList;
    timePerCellMillis: number;
    length: number;
    headPosition: Cordinate;

    /**
     * Shifts the snake in the desired direction
     * Allowed values are +1, -1 for both x and y
     * The whole co-ordinates in the snake body should be moved.
     */
    moveSnake(movement: Movement): void;
    /**
     * New snakecells will be generated at tail.
     * The fruit will get vanished.
     */
    eatFruit(fruitSize): void;
}

export interface SnakeCell {
    // Unique ID for each snake cell.
    id: number;
    position: Cordinate;
    movement: Movement;
}

export interface CellSize {
    numberOfCellsHeight: number;
    numberOfCellsWidth: number;
}
