import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, double, halve, reset } from './counter.actions';

///////////////////////////////////////
//  ngRx version (faster, scalable)  //
///////////////////////////////////////

// I. Initial State
const state = 3; // initial state

// II. define Intructions for Actions
const _counterReducer = createReducer(
  state,
  // actions
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(double, (state) => state * 2),
  on(halve, (state) => state / 2),
  on(reset, () => 0)
);

// III. factory
function counterReducer(state: number, action: Action) {
  return _counterReducer(state, action);
}

// IV. export state & factory
export { state, counterReducer };

// NOTE: generic redux version

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
