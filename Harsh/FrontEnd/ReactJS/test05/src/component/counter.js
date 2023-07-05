import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  countIncr() {
    this.setState({ count: this.state.count + 1 }, () =>
      console.log("count -- ", this.state.count)
    );
  }

  render() {
    return (
      <div>
        <p>count - {this.state.count}</p>
        <button onClick={() => this.countIncr()}>Increase</button>
      </div>
    );
  }
}

export default Counter;
