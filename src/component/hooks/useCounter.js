import { useReducer } from "react";

const CHANGE = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};
function reducer(state, action) {
  switch (action.type) {
    case CHANGE.INCREMENT:
      return { count: state.count + 1 };
    case CHANGE.DECREMENT:
      return { count: state.count - 1 };
    case CHANGE.RESET:
      return { count: (state.count = 0) };

    default:
      return state;
  }
}

export default function useCounter(initialState) {
  const [state, dispatch] = useReducer(reducer, { count: initialState });

  function increment() {
    dispatch({ type: CHANGE.INCREMENT });
  }
  function decrement() {
    dispatch({ type: CHANGE.DECREMENT });
  }
  function reset() {
    dispatch({ type: CHANGE.RESET });
  }

  return [state, increment, decrement, reset];
}
