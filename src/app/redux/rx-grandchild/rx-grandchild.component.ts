import { Component } from '@angular/core';
// ngRx
import { Store } from '@ngrx/store';
import { reset } from '../counter.actions';
import { AppState } from '../interfaces/app-state';

@Component({
  selector: 'app-rx-grandchild',
  templateUrl: './rx-grandchild.component.html',
  styleUrls: ['./rx-grandchild.component.scss'],
})
export class RxGrandchildComponent {
  counter: number;

  constructor(
    // inject Store: service
    private store: Store<AppState>
  ) {
    /* ngRX subscriptions */
    this.store.select('count').subscribe((value) => (this.counter = value));
  }

  /* ngRX dipatched actions */
  reset() {
    this.store.dispatch(reset());
  }
}
