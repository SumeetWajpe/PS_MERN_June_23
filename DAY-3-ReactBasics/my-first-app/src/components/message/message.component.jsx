import React from "react";
import "./message.css";
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
        <h3 className="no-margin">{this.props.details.msg}</h3>
        <p className="no-margin">From : {this.props.details.from}</p>
        <p className="no-margin">To : {this.props.details.to}</p>
        <hr />
      </>
    );
  }
}
