import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //first we hardcoded the mosters name but in real life we will get the data from the backened (server , database etc) we will use a resource where it will give 10 users data without actually building any kind of backended server
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((mov) => (
          <h1 key={mov.id}>{mov.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
