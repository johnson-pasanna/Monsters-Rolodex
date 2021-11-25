import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "1",
        },
        {
          name: "Zombie",
          id: "2",
        },
        {
          name: "Chibula",
          id: "3",
        },
      ],
    };
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
