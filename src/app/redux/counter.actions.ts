import { createAction, props } from '@ngrx/store';

// (Action.type): function
const increment = createAction('[Counter] Increase');
const decrement = createAction('[Counter] Decrease');
const double = createAction('[Counter] Double');
const halve = createAction('[Counter] Halve');
const multiply = createAction(
  '[Counter] Multiply',
  props<{ payload: number }>()
);
const divide = createAction('[Counter] Divide', props<{ payload: number }>());
const reset = createAction('[Counter] Reset');

export { increment, decrement, double, halve, multiply, divide, reset };
