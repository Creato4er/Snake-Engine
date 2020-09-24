import { Cordinate } from './cordinate.interface';
import { Fruit } from './fruit.interface';
import { Snake } from './snake.interface';
import { UserInput } from './userInput.interface';

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
    removeFruit(fruit: Fruit);


    // Picks a random cordinate and creates the snake.
    createSnake(): void;
    // Increase the size of the snake
    snakeEatsFruit(fruitSize: number): void;
    // Move to be associated with a controller
    move(direction: Cordinate);

    // To get the user-input from the user and associate
    // With the snake movements
    handleUserInput(useriput: UserInput): Cordinate;

    recordMovementData();

}
