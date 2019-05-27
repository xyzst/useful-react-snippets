import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Darren", age: 26 },
      { name: "Anakin", age: 8 },
      { name: "Sansa", age: 18 },
      { name: "Joffrey", age: 18 },
      { name: "Arya", age: 16 },
      { name: "Eddard", age: 40 }
    ]
  });

  const [toggleState, setToggleState] = useState({
    showPersons: false
  });

  const nameChangeHandler = event => {
    setPersonsState({
      persons: [
        { name: "Darren", age: 26 },
        { name: "Anakin", age: 8 },
        { name: "Sansa", age: 18 },
        { name: "Joffrey", age: 18 },
        { name: "Arya", age: 16 },
        { name: event.target.value, age: 40 }
      ]
    });
  };

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: "Darren Rambaud", age: 26 },
        { name: "Sansa Stark", age: 18 },
        { name: "Joffrey Baratheon", age: 18 },
        { name: "Arya Stark", age: 16 },
        { name: newName, age: 40 }
      ]
    });
  };

  const togglePersons = () => {
    setToggleState({ showPersons: !toggleState.showPersons });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <h1>Hello from React App!</h1>
      <button style={style} onClick={togglePersons}>
        ~ Hide/Show Person(s) ~
      </button>
      {toggleState.showPersons ? (
        <div>
          {personsState.persons.map(x =>
            x.name === "Arya Stark" || x.name === "Arya" ? (
              <Person
                name={x.name}
                age={x.age}
                click={switchNameHandler.bind(this, "...RandomValueHere")}
                changed={nameChangeHandler}
              >
                Hobbies: Getting revenge, killing enemies
              </Person>
            ) : (
              <Person
                name={x.name}
                age={x.age}
                click={switchNameHandler.bind(this, "x")}
                changed={nameChangeHandler}
              />
            )
          )}
        </div>
      ) : null}
    </div>
  );
  // return React.createElement(
  // "div",
  // { className: "App" },
  // React.createElement("h1", null, "Hello from React App!")
  // );
};

export default App;
