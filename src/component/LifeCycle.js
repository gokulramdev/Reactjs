import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playername: "MSD", users: [],
    add:0
  };
    console.log("Inital");
  }

  onch = () => {
    this.setState({ add:this.state.add +1 });
  }
  static getDerivedStateFromProps(props, state) {
    return null;
  }

  // componentDidMount() {
  //   console.log("CDM");
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ users: data });
  //     });
  // }
  handleScroll = () => { 
  }

  componentDidMount() {
    window.addEventListener("scroll",this.handleScroll)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate',prevState)
    return null
	}
  componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate',snapshot)
    console.log('componentDidUpdate',prevState)
	}


  render() {
    console.log("render");
    return (
      <>
        <h1>My Favorite cricket Player is {this.state.playername}</h1>
        {this.state.add}
        <button onClick={this.onch}>Add</button>
        {/* {this.state.users.map((user) => {
          return (
            <>
              <li>{user.name}</li>
            </>
          );
        })} */}
      </>
    );
  }
}

export default LifeCycle;
