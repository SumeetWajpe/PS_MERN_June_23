import React from "react";
import { Message } from "./components/message/message.component";

class App extends React.Component {
  messages = [
    {
      msg: "Hello",
      from: "Joe",
      to: "Modi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png/1200px-Hello_Web_Series_%28Wordmark%29_Logo.png",
    },
    {
      msg: "Hey",
      from: "Jim",
      to: "Kim",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Hey_2018_logo.svg/1200px-Hey_2018_logo.svg.png",
    },
    {
      msg: "Bye",
      from: "John",
      to: "Jim",
      imageUrl: "https://chd.in/wp-content/uploads/2018/05/bye.png",
    },
  ];
  render() {
    return (
      <div className="row">
        {this.messages.map(message => (
          <Message details={message} />
        ))}
        {/* <Message
          msg="Hey"
          from="Jim"
          to="Kim"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Hey_2018_logo.svg/1200px-Hey_2018_logo.svg.png"
        />
        <Message
          msg="Bye"
          from="John"
          to="Jim"
          imageUrl="https://chd.in/wp-content/uploads/2018/05/bye.png"
        /> */}
      </div>
    );
  }
}

export const PI = 3.14; // named export
export const PIE = 3.14; // named export

export default App; // one default export per module/file
