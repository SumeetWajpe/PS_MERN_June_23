import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListOfProducts } from "../listofproducts/listofproducts.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
