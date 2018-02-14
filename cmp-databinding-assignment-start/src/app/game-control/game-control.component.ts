import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() event_fired = new EventEmitter<number>();
  interval = null;
  last_number = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.event_fired.emit(this.last_number);
      this.last_number += 1;
    }, 1000);
  }

  endGame() {
    clearInterval(this.interval);
  }
}
