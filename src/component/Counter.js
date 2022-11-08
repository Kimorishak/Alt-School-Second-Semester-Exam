import React from "react";
import { NavLink } from "react-router-dom";
import useCounter from "./hooks/useCounter";

function App() {
  const [state, increment, decrement, reset] = useCounter(0);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}>+</button>
      </div>

      <div>
        Click <NavLink to="/">here</NavLink> to go back to Home page
      </div>
    </div>
  );
}

export default App;
