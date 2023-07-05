import React, { Component } from "react";
// import logo from "./logo.svg";
import Hello from "./component/hello";
import Welcome from "./component/welcome";
import Message from "./component/mess";
import Counter from "./component/counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hello /> */}
        {/* <Hello name="harsh">
          <p>the children demo</p>
        </Hello>
        <Welcome name="tiger" /> */}
        <Message></Message>
        <Counter />
      </div>
    );
  }
}

export default App;
