import { Component, OnInit } from '@angular/core';
import { Snake } from './snake/snake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'snakeEngine';

  ngOnInit() {
  }
}
