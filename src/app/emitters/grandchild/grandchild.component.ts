import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss'],
})
export class GrandchildComponent {
  @Input() counterLvl3: number; // prop
  @Output() counterEmitLvl3 = new EventEmitter<number>(); // prop

  constructor() {}

  // methods
  reset(): void {
    this.counterEmitLvl3.emit(0);
  }
}
