import React from "react";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((store: any) => store.products);
  return (
    <div>
      <h1>Using Redux - {products.length}</h1>
    </div>
  );
}

export default App;
