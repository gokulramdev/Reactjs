import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playername: "MSD", users: [] };
    console.log("Inital");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("CDM");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>My Favorite cricket Player is {this.state.playername}</h1>
        {this.state.users.map((user) => {
          return (
            <>
              <li>{user.name}</li>
            </>
          );
        })}
      </>
    );
  }
}

export default LifeCycle;
