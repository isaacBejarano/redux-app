import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/state';
import * as actions from '../counter.actions';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rx-parent',
  templateUrl: './rx-parent.component.html',
  styleUrls: ['./rx-parent.component.scss'],
})
export class RxParentComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  counter: number;

  // inject Store: service
  constructor(private store: Store<AppState>) {
    this.store.select('count').subscribe((count) => (this.counter = count));
  }

  /* hooks */

  //  ngRx subscriptions
  ngOnInit() {
    /*
      NOTE:
        nitial state defined in counter.reducer.ts
        variabl2 "count2 defined in app.modules.ts"
        it recognized "state" cox we'r using StoreModule in forRoot()
    */
  }

  /* ngRX */

  // actions dispatched
  plus() {
    this.store.dispatch(actions.increment());
  }

  minus() {
    this.store.dispatch(actions.decrement());
  }
}
