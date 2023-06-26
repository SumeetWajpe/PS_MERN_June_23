import React from "react";
import { ListOfProducts } from "../listofproducts/listofproducts.component";
import { Posts } from "../posts/posts.component";

class App extends React.Component {
 
  render(): React.ReactNode {
    console.log("render");
    // return <ListOfProducts />; // List of Products
    return <Posts />;
  }
}
export default App;
