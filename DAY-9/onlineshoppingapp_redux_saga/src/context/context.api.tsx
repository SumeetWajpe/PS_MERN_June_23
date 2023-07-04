import React, { useContext, useState } from "react";

export let CounterContext = React.createContext<number>(0);
//Provider
export function GrandParent() {
  const [count, setCount] = useState(10);
  return (
    <CounterContext.Provider value={count}>
      <Parent />
    </CounterContext.Provider>
  );
}

function Parent() {
  return (
    <>
      <Child />
      <AnotherChild />
    </>
  );
}

// Consumer
function Child() {
  let ctx = useContext(CounterContext);
  return (
    <>
      <h4>{ctx}</h4>
    </>
  );
}
function AnotherChild() {
  let ctx = useContext(CounterContext);
  return (
    <>
      <strong>{ctx}</strong>
    </>
  );
}
