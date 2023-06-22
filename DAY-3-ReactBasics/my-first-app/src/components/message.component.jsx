import React from "react";
export class Message extends React.Component {
  render() {
    return (
      <>
        <img
          src={this.props.details.imageUrl}
          alt=""
          height="100px"
          width="150px"
        />
        <h3>{this.props.details.msg}</h3>
        <h5>From : {this.props.details.from}</h5>
        <h5>To : {this.props.details.to}</h5>
        <hr />
      </>
    );
  }
}
