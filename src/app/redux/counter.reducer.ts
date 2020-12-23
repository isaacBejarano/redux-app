import { Action } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

// Reducer takes Actions + old (| initial) State
const counterReducer = (state = 3, action: Action) => {
  // "type" is prop of interface Action - the param string inside createAction()
  switch (action.type) {
    case increment.type:
      return state + 1; // != state++ (we don't wanna mutate state, just return a new value (state+1))
    case decrement.type:
      return state - 1; // idem
    case reset.type:
      return 0; // idem
    default:
      return state; // compulsory
  }
};

export { counterReducer };
