import { Component } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/state';
import * as actions from '../counter.actions';

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
    this.store.dispatch(actions.increment());
  }

  minus() {
    this.store.dispatch(actions.decrement());
  }
}

// NOTE: Contructor vs ON INIT
//   initial state defined in counter.reducer.ts
//   variabl2 "count2 defined in app.modules.ts"
//   it recognized "state" cox we'r using StoreModule in forRoot()
