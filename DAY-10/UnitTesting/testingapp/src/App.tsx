import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
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
