import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Anakin", age: 8 },
      { name: "Sansa", age: 18 },
      { name: "Joffrey", age: 18 },
      { name: "Arya", age: 16 }
    ]
  };

  switchNameHandler = event => {
    event.preventDefault();
    // this.state.persons[0].name = "holla"; // very bad to use, will produce warning. Wont update state or cause re-render
    this.setState({
      persons: [
        { name: "Darren Rambaud", age: 26 },
        { name: "Sansa Stark", age: 18 },
        { name: "Joffrey Baratheon", age: 18 },
        { name: "Arya Stark", age: 16 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello from React App!</h1>
        <button onClick={this.switchNameHandler}>~ Switch Name ~</button>
        {this.state.persons.map(x =>
          x.name === "Arya Stark" || x.name === "Arya" ? (
            <Person name={x.name} age={x.age}>
              Hobbies: Getting revenge, killing enemies
            </Person>
          ) : (
            <Person name={x.name} age={x.age} />
          )
        )}
      </div>
    );
    // return React.createElement(
    // "div",
    // { className: "App" },
    // React.createElement("h1", null, "Hello from React App!")
    // );
  }
}

export default App;
