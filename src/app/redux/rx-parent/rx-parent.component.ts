import { Component } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// ngRx
import { Store } from '@ngrx/store';
import { increment, decrement } from '../counter.actions';
import { AppState } from '../interfaces/app-state';

@Component({
  selector: 'app-rx-parent',
  templateUrl: './rx-parent.component.html',
  styleUrls: ['./rx-parent.component.scss'],
})
export class RxParentComponent {
  faPlus = faPlus;
  faMinus = faMinus;
  counter: number;

  // inject Store: service
  constructor(private store: Store<AppState>) {
    /* ngRX subscriptions */
    this.store.select('count').subscribe((value) => (this.counter = value));
  }

  /* ngRX dipatched actions */ plus() {
    this.store.dispatch(increment());
  }

  minus() {
    this.store.dispatch(decrement());
  }
}

// NOTE: Contructor vs ON INIT
//   initial state defined in counter.reducer.ts
//   variable "count" defined in app.modules.ts"
//   it recognized "state" cox we'r using StoreModule in forRoot()
