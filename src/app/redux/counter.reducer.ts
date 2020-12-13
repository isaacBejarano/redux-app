import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

// Reducer takes Actions + old State
export function counterReducer(state: number = 0, action: Action) {
  // "type" is prop of interface Action
  // "type" is the string inside our actions method createAction(type)
  switch (action.type) {
    case increment.type:
      return state + 1; // != state++ (we don't wanna mutate state, just return a new value (state+1))
    case decrement.type:
      return state - 1; // != state--
    default:
      return state;
  }
}
