import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import { ListOfProducts } from "../listofproducts/listofproducts.component";
import Header from "../header/header.component";
import ProductDetails from "../productdetails/productdetails.component";
import { CartSummary } from "../page/cartsummary/cartsummary.component";
import PostDetails from "../postdetails/postdetails.component";
import { GrandParent } from "../../context/context.api";
import { NewProduct } from "../newproduct/newproductwithreacthookform";
import Dashboard from "../dashboard/dashboard.component";
import Login from "../login/login.component";
import RequireAuth from "../requireauth.hoc/requireauth.hoc";

//Code-Splitting/LazyLoading
const Posts = React.lazy(() => import("../posts/posts"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* <Route path="" element={<ListOfProducts />} /> */}

          <Route index element={<ListOfProducts />} />
          <Route
            path="posts"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Posts />
              </Suspense>
            }
          />
          <Route path="postdetails/:id" element={<PostDetails />} />

          <Route path="productdetails/:id" element={<ProductDetails />} />
          <Route path="cartsummary" element={<CartSummary />} />
          <Route path="context" element={<GrandParent />} />
          <Route path="newproduct" element={<NewProduct />} />
        </Route>

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
