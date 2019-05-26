import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello from React App!</h1>
        <Person />
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
