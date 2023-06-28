import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";

function App() {
  const products = useSelector((store: AppState) => store.products);
  return (
    <div>
      <h1>Using Redux - {products.length}</h1>
    </div>
  );
}

export default App;
