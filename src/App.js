import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello from React App!</h1>
        <Person name="Anakin" age="8" />
        <Person name="Sansa" age="18">
          My Hobbies: Kill Cersei
        </Person>
        <Person name="Joffrey" age="18" />
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
