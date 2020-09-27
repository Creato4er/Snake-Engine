import { Cordinate } from '../interface/cordinate.interface';
import { SnakeList, SnakeNode } from '../../shared/linkedList.class'
import { Observable, Subject } from 'rxjs';

export class Movement {
    time: number;
    unit: Cordinate;
    public static reverse(unit: Cordinate) {
        return { x: unit.x * (-1), y: unit.y * (-1) };
    }
}

export class SnakeCell {
    position: Cordinate;
    movement = new Movement();
}

export class Snake {
    public snakeBlockSize = 5;
    public snakeBody: SnakeList;
    public timePerCellMillis = 1000;
    public movement: any; // Indicates the head movement.
    // tslint:disable-next-line: variable-name
    private _snakePosition = new Subject();

    constructor(snakeBlockSize, movement) {
        this.snakeBlockSize = snakeBlockSize;
        this.movement = movement;
        // this.moveSnakeBody();
    }
    public getSnakePosition(): Observable<any> {
        return this._snakePosition as Observable<any>;
    }
    public moveSnakeBody() {
        setInterval(() => {
            this.moveSnake();
        }, this.timePerCellMillis);
    }
    public get head() {
        return this.snakeBody.head;
    }
    public get length() {
        return this.snakeBody.findlength();
    }
    public moveSnake() {
        this.snakeBody.removeLastNode();
        const snakeHead: SnakeNode = JSON.parse(JSON.stringify(this.snakeBody.head));
        snakeHead.data.position.x += this.movement.unit.x;
        snakeHead.data.position.y += this.movement.unit.y;
        this.snakeBody.shiftHead(snakeHead.data);
        this._snakePosition.next(this.snakeBody);
    }

    public printSnake() {
        return this.snakeBody.convertArr();
    }
    private extendSnakeBody(cellSize) {
        if (!this.snakeBody || !this.snakeBody.head) {
            this.snakeBody = new SnakeList();
            // tslint:disable-next-line: prefer-const
            let snakeCell = new SnakeCell();
            snakeCell.position = { x: 0, y: 0 };
            snakeCell.movement.time = 1;
            snakeCell.movement.unit = { x: this.snakeBlockSize, y: 0 };
            this.snakeBody.head = this.createSnakeNode(snakeCell);
        } else {
            const data = JSON.parse(JSON.stringify(this.snakeBody.getLastNode().data));
            const offset = Movement.reverse(data.movement.unit);
            data.position.x += offset.x;
            data.position.y += offset.y;
            this.snakeBody.addTail(data);
        }
    }

    // Creating new snake node pased on id, position and movement
    private createSnakeNode(snakeCell: SnakeCell) {
        return new SnakeNode(snakeCell);
    }


    public eatFruit(fruitSize: number) {
        for (let i = 0; i < fruitSize; i++) {
            this.extendSnakeBody(fruitSize);
        }
    }
}