import { Component } from '@angular/core';
import { faDivide, faClone } from '@fortawesome/free-solid-svg-icons';

import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/state';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-rx-child',
  templateUrl: './rx-child.component.html',
  styleUrls: ['./rx-child.component.scss'],
})
export class RxChildComponent {
  faDivide = faDivide;
  faClone = faClone;
  counter: number;

  // inject Store: service
  constructor(private store: Store<AppState>) {
    /* ngRX subscriptions */
    this.store.select('count').subscribe((value) => (this.counter = value));
  }

  /* ngRX dipatched actions */
  double() {
    this.store.dispatch(actions.double());
  }

  halve() {
    this.store.dispatch(actions.halve());
  }
}
