import { ISnake, SnakeCell } from '../interface/snake.interface';

export class Snake implements ISnake {

    public snakeBody: SnakeCell[];

    public get headPosition() {
        return this.snakeBody[0].position;
    }
    public get length() {
        return this.snakeBody.length;
    }
    public moveSnake() {

    }

    public extendSnakeBody(cellSize) {

    }

    public eatFruit(fruitSize: number) {
        let snakeCell
    }
}