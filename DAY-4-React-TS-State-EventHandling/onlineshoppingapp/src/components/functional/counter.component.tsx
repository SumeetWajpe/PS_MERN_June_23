import { useState } from "react";

export function Counter() {
  const [myState, setMyState] = useState({ count: 0, age: 18 });

  return (
    <>
      <strong>Count : {myState.count}</strong>
      <button
        onClick={() => {
          setMyState({ ...myState, count: myState.count + 1 });
        }}
      >
        ++
      </button>
      <hr />
      <strong>Age : {myState.age}</strong>

      <button onClick={() => setMyState({ ...myState, age: myState.age + 1 })}>
        Age++
      </button>
    </>
  );
}

// export function Counter() {
//   const [count, setMyCount] = useState(10);
//   const [age, setAge] = useState(18);

//   return (
//     <>
//       <strong>Count : {count}</strong>
//       <button
//         onClick={() => {
//           setMyCount(count + 10);
//         }}
//       >
//         ++
//       </button>
//       <hr />
//       <strong>Age : {age}</strong>

//       <button onClick={() => setAge(age + 1)}>Age++</button>
//     </>
//   );
// }
