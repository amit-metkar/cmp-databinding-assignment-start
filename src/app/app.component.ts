import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   ref;
   numberList: number[] = [];
   constructor() {

   }

  onGameStart(data: {count: number}) {
    this.numberList.push(data.count);
  }
}
