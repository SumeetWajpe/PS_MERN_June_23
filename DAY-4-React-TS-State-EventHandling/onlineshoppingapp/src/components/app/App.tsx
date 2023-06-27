import React from "react";
import { ListOfProducts } from "../listofproducts/listofproducts.component";
import { Message } from "../functional/message.component";
import { Counter } from "../functional/counter.component";
import { Posts } from "../posts/posts.functional";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NewProduct } from "../newproduct/newproduct.component";
import Header from "../header/header.component";
import ProductDetails from "../productdetails/productdetails.component";
import PostDetails from "../postdetails/postdetails.component";

// export default function App() {
//   return <ListOfProducts />;
// }

const App: React.FC = function () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/postdetails/:id" element={<PostDetails />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
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
