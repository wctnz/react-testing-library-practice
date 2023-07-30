import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = ({ count }, { type }) => {
  switch (type) {
    case "INCREMENT":
      return { count: count + 1 };
    case "DECREMENT":
      return { count: count - 1 };
    default:
      return {};
  }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <>
        <h1>{state.count}</h1>
        <button data-testid="plus-one" onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button data-testid="minus-one" onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      </>
    );
  };

  export default Counter