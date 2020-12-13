import { Component } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  faPlus = faPlus;
  faMinus = faMinus;
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
