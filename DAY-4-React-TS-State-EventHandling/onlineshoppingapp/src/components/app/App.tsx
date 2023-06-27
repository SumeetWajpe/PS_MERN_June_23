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
import GetPostById from "../getpostbyid/getpostbyid.component";

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
        <Route path="/getpostbyid" element={<GetPostById />} />
        <Route
          path="*"
          element={
            <img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg" />
          }
        />
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
