import { useState } from "react";

export function Counter() {
  const [count, setMyCount] = useState(10);
  const [age, setAge] = useState(18);

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
      <hr />
      <strong>Age : {age}</strong>

      <button onClick={() => setAge(age + 1)}>Age++</button>
    </>
  );
}
