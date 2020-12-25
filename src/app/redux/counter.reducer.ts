import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

// Reducer takes Actions + old (| initial) State
// "type" is prop of interface Action - the param string inside createAction()
// const counterReducer = (state = 3, action: Action) => {
//   switch (action.type) {
//     case increment.type:
//       return state + 1; // != state++ (we don't wanna mutate state, just return a new value (state+1))
//     case decrement.type:
//       return state - 1; // idem
//     case reset.type:
//       return 0; // idem
//     default:
//       return state; // compulsory
//   }
// };

// export { counterReducer };

const state = 3; // init state

const _counterReducer = createReducer(
  state,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
