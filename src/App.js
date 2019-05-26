import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Anakin", age: 8 },
      { name: "Sansa", age: 18 },
      { name: "Joffrey", age: 18 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello from React App!</h1>
        <button>~ Switch Name ~</button>
        {/* {this.state.persons.map(x => (
          <Person name={x.name} age={x.age} />
        ))} */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Kill Cersei
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
