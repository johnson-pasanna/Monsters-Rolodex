import React, { Component } from "react";
// import logo from "./logo.svg";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    //constructor is the code that runs first before anything gets called first
    super();
    this.state = {
      //first we hardcoded the mosters name but in real life we will get the data from the backened (server , database etc) we will use a resource where it will give 10 users data without actually building any kind of backended server
      monsters: [],
      searchField: "",
    }; // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    // handleChange(e) {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 class="logo-font">Monsters - Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
