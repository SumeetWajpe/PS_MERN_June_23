// import { count } from "console";
// import React, { useContext, useState } from "react";

// type ContextData = {
//   count: number;
//   age: number;
//   msg: string;
//   mutate: (incrementBy: number) => void;
// };

// export let CounterContext = React.createContext<ContextData>({
//   count: 0,
//   age: 0,
//   msg: "",
//   mutate: function () {},
// });
// //Provider
// export function GrandParent() {
//   const [data, setData] = useState({
//     count: 10,
//     age: 20,
//     msg: "",
//   });
//   let valueToBePassed = {
//     ...data,
//     mutate: (incrementBy: number) => {
//       setData({ ...data, count: data.count + incrementBy });
//     },
//   };
//   return (
//     <CounterContext.Provider value={valueToBePassed}>
//       <Parent />
//     </CounterContext.Provider>
//   );
// }

// function Parent() {
//   return (
//     <>
//       <Child />
//       <hr />
//       <AnotherChild />
//     </>
//   );
// }

// function Child() {
//   let ctx = useContext(CounterContext); // preferred
//   return (
//     <>
//       <h4> Child : Age : {ctx.age}</h4>
//       <h4> Child :Count : {ctx.count}</h4>
//       <button className="btn btn-primary" onClick={() => ctx.mutate(2)}>
//         Count++
//       </button>
//     </>
//   );
// }

// // Consumer
// // function Child() {
// //   // let ctx = useContext(CounterContext);// preferred
// //   return (
// //     <CounterContext.Consumer>
// //       {ctx => {
// //         return <h4>{ctx.age}</h4>;
// //       }}
// //     </CounterContext.Consumer>
// //   );
// // }
// function AnotherChild() {
//   let ctx = useContext(CounterContext);
//   return (
//     <>
//       <h4>Another Child : Age : {ctx.age}</h4>
//       <h4>Another Child : Count : {ctx.count}</h4>
//     </>
//   );
// }

import { count } from "console";
import React, { useContext, useState } from "react";

type ContextData = {
  count: number;
  mutate: (incrementBy: number) => void;
};

export let CounterContext = React.createContext<ContextData>({
  count: 0,
  mutate: function () {},
});
//Provider
export function GrandParent() {
  const [data, setData] = useState({
    count: 10,
  });
  let valueToBePassed = {
    ...data,
    mutate: (incrementBy: number) => {
      setData({ count: data.count + incrementBy });
    },
  };
  return (
    <CounterContext.Provider value={valueToBePassed}>
      <Parent />
    </CounterContext.Provider>
  );
}

function Parent() {
  return (
    <>
      <Child />
      <hr />
      <AnotherChild />
    </>
  );
}

function Child() {
  let ctx = useContext(CounterContext); // preferred
  return (
    <>
      <h4> Child :Count : {ctx.count}</h4>
      <button className="btn btn-primary" onClick={() => ctx.mutate(20)}>
        Count++
      </button>
    </>
  );
}

function AnotherChild() {
  let ctx = useContext(CounterContext);
  return (
    <>
      <h4>Another Child : Count : {ctx.count}</h4>
    </>
  );
}
