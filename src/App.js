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
    console.log(" switch name clicked!");
  };

  render() {
    return (
      <div className="App">
        <h1>Hello from React App!</h1>
        <button onClick={this.switchNameHandler}>~ Switch Name ~</button>
        {this.state.persons.map(x =>
          x.name === "Arya" ? (
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
