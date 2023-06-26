import React from "react";
import { ListOfProducts } from "../listofproducts/listofproducts.component";
import { Posts } from "../posts/posts.component";
import { Message } from "../functional/message.component";

class App extends React.Component {
  render(): React.ReactNode {
    console.log("render");
    // return <ListOfProducts />; // List of Products
    // return <Posts />;
    return <Message msg="Hello" />;
  }
}
export default App;
