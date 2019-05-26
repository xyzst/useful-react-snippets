import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Anakin", age: 8 },
      { name: "Sansa", age: 18 },
      { name: "Joffrey", age: 18 },
      { name: "Arya", age: 16 }
    ]
  });

  const [otherState, setOtherState] = useState("some other value");

  const switchNameHandler = event => {
    event.preventDefault();
    setPersonsState({
      persons: [
        { name: "Darren Rambaud", age: 26 },
        { name: "Sansa Stark", age: 18 },
        { name: "Joffrey Baratheon", age: 18 },
        { name: "Arya Stark", age: 16 },
        { name: "Eddard Stark", age: 40 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello from React App!</h1>
      <button onClick={switchNameHandler}>~ Switch Name ~</button>
      {personsState.persons.map(x =>
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
};

export default App;
