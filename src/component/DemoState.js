import React, { Component } from "react";

class DemoState extends Component {
  state = {
    message: "Hi",
    age: 24,
    some: true,
  };

  changeMessage() {
    this.setState({
      message: "Hi Gokul!",
      age: 27,
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.message} {this.state.age}
        </h1>
        <button onClick={() => this.changeMessage()}>Show</button>
      </div>
    );
  }
}

export default DemoState;
