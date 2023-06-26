import { useState } from "react";

export function Counter() {
  const [count, setMyCount] = useState(10);
  return (
    <>
      <strong>Count : {count}</strong>
      <button
        onClick={() => {
          setMyCount(count + 10);
        }}
      >
        ++
      </button>
    </>
  );
}
