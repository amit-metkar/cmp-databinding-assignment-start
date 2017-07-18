import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStart = new EventEmitter<{count: number}>();

  count: number = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.ref = setInterval(()=> {
      this.count++;
      this.gameStart.emit({count: this.count});
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.ref);
  }

}
