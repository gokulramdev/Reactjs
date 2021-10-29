import React, { Component } from "react";

class DemoProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Rendering {this.props.name.age}</h1>
        <h1> Rendering {this.props.name.name}</h1>
      </div>
    );
  }
}

export default DemoProps;
