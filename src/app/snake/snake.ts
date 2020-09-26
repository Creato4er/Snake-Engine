import { Cordinate } from '../interface/cordinate.interface';
import { Movement } from '../interface/movement.interface';
import { ISnake, SnakeCell } from '../interface/snake.interface';

export class Snake implements ISnake {

    public snakeBody: SnakeCell[];
    public timePerCellMillis = 1000;
    public movement: Movement;

    constructor() {
    }

    public get headPosition() {
        return this.snakeBody[0].position;
    }
    public get length() {
        return this.snakeBody.length;
    }
    public moveSnake(movement: Movement) {
        this.snakeBody.pop();
        const snakeHead = this.snakeBody[0];
        snakeHead.position.x += movement.unit.x;
        snakeHead.position.y += movement.unit.y;
        const newSnakeBody = [];
        newSnakeBody.push(snakeHead);
        newSnakeBody.push(...this.snakeBody);
        this.snakeBody = newSnakeBody;
    }

    private extendSnakeBody(cellSize) {

    }


    public eatFruit(fruitSize: number) {
        this.extendSnakeBody(fruitSize);
    }
}