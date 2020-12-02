import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  counter = 0;

  constructor() {}

  // methods
  plus(): void {
    this.counter++;
  }

  minus(): void {
    this.counter--;
  }
}
