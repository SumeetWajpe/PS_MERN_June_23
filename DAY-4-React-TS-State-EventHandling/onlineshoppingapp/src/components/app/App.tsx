import React from "react";
import { ListOfProducts } from "../listofproducts/listofproducts.component";
import { Message } from "../functional/message.component";
import { Counter } from "../functional/counter.component";
import { Posts } from "../posts/posts.functional";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NewProduct } from "../newproduct/newproduct.component";

// export default function App() {
//   return <ListOfProducts />;
// }

const App: React.FC = function () {
  return (
    <BrowserRouter>
      <Link to="/">Products</Link> | <Link to="/posts">Posts</Link> |{" "}
      <Link to="/newproduct">New Product</Link>
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
