import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ListOfProducts } from "../listofproducts/listofproducts.component";
import Header from "../header/header.component";
import { NewProduct } from "../newproduct/newproductwithreacthookform";
import ProductDetails from "../productdetails/productdetails.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        {/* <Route path="/posts" element={<Posts />} />
        <Route path="/postdetails/:id" element={<PostDetails />} /> */}
        <Route path="/newproduct" element={<NewProduct />} />

        <Route path="/productdetails/:id" element={<ProductDetails />} />

        <Route
          path="*"
          element={
            <img
              src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"
              alt="Resource Not Found"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
