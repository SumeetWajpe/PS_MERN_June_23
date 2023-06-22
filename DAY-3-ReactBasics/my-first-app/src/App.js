import React from "react";
import { Message } from "./components/message.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Message msg="Hello" />
        <Message msg="Hey" />
        <Message msg="Bye" />
        <Message msg="Hi" />
        <Message msg="Hola" />
      </div>
    );
  }
}

export const PI = 3.14; // named export
export const PIE = 3.14; // named export

export default App; // one default export per module/file
