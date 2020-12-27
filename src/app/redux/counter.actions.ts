import { createAction } from '@ngrx/store';

// (Action.type): function
const increment = createAction('[Counter] Increase');
const decrement = createAction('[Counter] Decrease');
const double = createAction('[Counter] Double');
const halve = createAction('[Counter] Halve');
const reset = createAction('[Counter] Reset');

export { increment, decrement, double, halve, reset };
