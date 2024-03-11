import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
      return state + 1;
    } else if (action.type === 'DECREMENT') {
      return state - 1;
    } else if (action.type === 'RESET') {
      return 0;
    } else {
      return state;
    }
  };
  

// Initial state
const initialState = 0;

// Component
function Counter() {
  // useReducer returns the current state and a dispatch function
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}


export default Counter;
