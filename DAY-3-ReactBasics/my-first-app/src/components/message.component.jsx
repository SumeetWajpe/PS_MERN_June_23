import React from "react";
export class Message extends React.Component {
  render() {
    return <h3>{this.props.msg}</h3>;
  }
}
