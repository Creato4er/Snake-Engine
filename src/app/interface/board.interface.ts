import { Cordinate } from './cordinate.interface';
import { Snake } from './snake.interface';

export interface Board {
    size: Cordinate;
    // List of fruits visible on the board.
    fruits: Cordinate[];
    snake: Snake;

    // Generates a random fruit position
    generateNewFruitPosition(): Cordinate;
    // Creates a fruit on the board.
    generateFruit(position: Cordinate): void;
    // Destroys the passed fruit instance from the table
    removeFruit(fruit);

    /**
     * Picks a random cordinate and creates the snake.
     */
    createSnake(): void;
    // Increase the size of the snake
    snakeEatsFruit(fruitSize: number): void;
    move(direction: Cordinate);
}
