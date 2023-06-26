import React from "react";
import { ListOfProducts } from "../listofproducts/listofproducts.component";
import { Message } from "../functional/message.component";
import { Counter } from "../functional/counter.component";
import { Posts } from "../posts/posts.functional";

class App extends React.Component {
  render(): React.ReactNode {
    console.log("render");
    // return <ListOfProducts />; // List of Products
    return <Posts />;
    // return <Message msg="Hello" />;
    // return <Counter />;
  }
}
export default App;
