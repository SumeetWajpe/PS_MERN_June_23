import React from "react";
export class Message extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.imageUrl} alt="" height="100px" width="150px" />
        <h3>{this.props.msg}</h3>
        <h5>From : {this.props.from}</h5>
        <h5>To : {this.props.to}</h5>
        <hr />
      </>
    );
  }
}
