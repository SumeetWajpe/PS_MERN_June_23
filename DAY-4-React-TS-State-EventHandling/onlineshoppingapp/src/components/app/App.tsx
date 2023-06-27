import React from "react";
import { ListOfProducts } from "../listofproducts/listofproducts.component";
import { Message } from "../functional/message.component";
import { Counter } from "../functional/counter.component";
import { Posts } from "../posts/posts.functional";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewProduct } from "../newproduct/newproduct.component";

// export default function App() {
//   return <ListOfProducts />;
// }

const App: React.FC = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// class App extends React.Component {
//   render(): React.ReactNode {
//     console.log("render");
//     // return <ListOfProducts />; // List of Products
//     return <Posts />;
//     // return <Message msg="Hello" />;
//     // return <Counter />;
//   }
// }
// export default App;
