import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type AppProps = {
  initialCount: number;
};

function App(props: AppProps) {
  const [count, setCount] = useState(props.initialCount);
  return (
    <div className="App">
      <h3 className="header">{count}</h3>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        ++
      </button>
    </div>
  );
}

export default App;
