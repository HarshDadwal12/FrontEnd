import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = { message: "Not Subscribed" };
  }

  createSubscribe() {
    console.log("click kiya ---- ");
    return this.setState({
      message: "Subscribed",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.createSubscribe()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
