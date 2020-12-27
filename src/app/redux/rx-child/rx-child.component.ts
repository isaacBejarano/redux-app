import { Component } from '@angular/core';
import { faDivide, faClone } from '@fortawesome/free-solid-svg-icons';
// ngRx
import { Store } from '@ngrx/store';
import * as actions from '../counter.actions';
import { AppState } from '../interfaces/app-state';

@Component({
  selector: 'app-rx-child',
  templateUrl: './rx-child.component.html',
  styleUrls: ['./rx-child.component.scss'],
})
export class RxChildComponent {
  faDivide = faDivide;
  faClone = faClone;
  payload = 3;
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

  multiply() {
    this.store.dispatch(actions.multiply({ payload: this.payload }));
  }

  divide() {
    this.store.dispatch(actions.divide({ payload: this.payload }));
  }
}
