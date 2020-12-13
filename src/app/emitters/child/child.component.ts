import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faDivide, faClone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  faDivide = faDivide;
  faClone = faClone;

  // TODO: use Redux
  @Input() counterLvl2: number; // prop
  @Output() counterEmitLvl2 = new EventEmitter<number>(); // prop

  constructor() {}

  // methods
  halve(): void {
    this.counterEmitLvl2.emit(this.counterLvl2 / 2);
  }

  double(): void {
    this.counterEmitLvl2.emit(this.counterLvl2 * 2);
  }

  // we have to emit to parent by using a method.
  // the parent cannot read directly the outputed prop in child
  counterEmitFromLvl3(valueFromLvl3: number): void {
    this.counterEmitLvl2.emit(valueFromLvl3);
  }
}
