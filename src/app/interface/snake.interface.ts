import { Cordinate } from './cordinate.interface';

export interface Snake {
    snakeBody: SnakeCell[];
    length: number;
    headPosition: Cordinate;

    /**
     * Shifts the snake in the desired direction
     * Allowed values are +1, -1 for both x and y
     * The whole co-ordinates in the snake body should be moved.
     */
    moveSnake(x: number, y: number): void;
    /**
     * New snakecells will be generated at tail.
     * The fruit will get vanished.
     */
    eatFruit(fruitSize): void;
}

export interface SnakeCell {
    // Unique ID for each snake cell.
    id: string;
    position: Cordinate;

    setCellPos(x: number, y: number): void; // Sets the position of the snakecell
}