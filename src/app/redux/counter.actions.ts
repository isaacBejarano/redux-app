import { createAction } from '@ngrx/store';

// (Action.type): function
const increment = createAction('[Counter] Increase'); 
const decrement = createAction('[Counter] Decrease');
const reset = createAction('[Counter] Reset');

export { increment, decrement, reset };
