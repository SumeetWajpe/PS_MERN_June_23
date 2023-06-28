import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { ListOfProducts } from "../listofproducts/listofproducts.component";

function App() {
  // const products = useSelector((store: AppState) => store.products);
  return (
    <div>
      <ListOfProducts />
    </div>
  );
}

export default App;
