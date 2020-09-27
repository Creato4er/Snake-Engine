import { Component, OnInit } from '@angular/core';
import { SnakeList } from 'src/shared/linkedList.class';
import { Movement, Snake } from './snake';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  snakeArr: any;

  constructor() { }

  ngOnInit() {
    let movement = new Movement();
    movement.time = 1;
    movement.unit = {x: 5, y: 5};
    const snake = new Snake(5, movement);
    snake.eatFruit(1);
    snake.eatFruit(2);
    snake.eatFruit(3);
    snake.eatFruit(4);
    snake.moveSnakeBody();
    snake.getSnakePosition().subscribe((snakePos) => {
      let snakeP = snakePos.convertArr();
      this.snakeArr = snakeP.map((cell) => cell.position);
    });
  }

}
