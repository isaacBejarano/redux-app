import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './counter.actions';

///////////////////////////////////////
//  ngRx version (faster, scalable)  //
///////////////////////////////////////

// I. Initial State
const initState = 3; // initial

// II. define Intructions for Actions
const _counterReducer = createReducer(
  initState,
  // actions
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => state - 1),
  on(actions.double, (state) => state * 2),
  on(actions.halve, (state) => state / 2),
  on(actions.multiply, (state, { payload }) => state * payload),
  on(actions.divide, (state, { payload }) => state / payload),
  on(actions.reset, () => initState) // ~ (state) => state * 0 + initState
);

// III. factory
const counterReducer = (state: number, action: Action) => {
  return _counterReducer(state, action);
};

// IV. export state & factory
export { initState, counterReducer };

//////////////////////////
//  generic JS version  //
//////////////////////////

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
