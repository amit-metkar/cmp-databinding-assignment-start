import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStart = new EventEmitter<{count: number}>();

  count: number;
  ref;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.ref = setInterval(this.startTimer, 1000);
  }

  onGameStop() {
    this.ref.clearInterval();
  }

  startTimer() {
    this.count++;
      this.gameStart.emit({count: this.count});
  }

}
