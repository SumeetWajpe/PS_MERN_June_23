import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListOfProducts } from "../listofproducts/listofproducts.component";
import Login from "../login/login.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ListOfProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
