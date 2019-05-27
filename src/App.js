import React, { useState } from "react";
import styles from "./App.css";
import Person from "./components/Person";
import styled from "styled-components";

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "a", name: "Darren", age: 26 },
      { id: "b", name: "Anakin", age: 8 },
      { id: "c", name: "Sansa", age: 18 },
      { id: "d", name: "Joffrey", age: 18 },
      { id: "e", name: "Arya", age: 16 },
      { id: "f", name: "Eddard", age: 40 }
    ]
  });

  const [toggleState, setToggleState] = useState({
    showPersons: false
  });

  const nameChangeHandler = (event, id) => {
    // given index (id), find matching id in personsState.persons array
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    // make a copy of the person associated with id using spread operator
    const person = { ...personsState.persons[personIndex] };
    person.name = event.target.value;

    // make a copy of personsState.persons using spread operator
    // and update the object at the specified personIndex
    const persons = [...personsState.persons];
    persons[personIndex] = person;
    setPersonsState({ persons });
  };

  const deletePersonHandler = personIndex => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons });
  };

  const togglePersons = () => {
    setToggleState({ showPersons: !toggleState.showPersons });
  };

  const Button = styled.button`
    background: ${toggleState.showPersons ? "green" : "red"};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    color: white;
    :hover {
      background: ${toggleState.showPersons ? "lightgreen" : "salmon"};
      color: black;
    }
  `;

  const showPersons = () => {
    let persons = null;
    if (toggleState.showPersons) {
      persons = (
        <div>
          {personsState.persons.map((x, index) => (
            <Person
              key={x.id}
              name={x.name}
              age={x.age}
              click={() => deletePersonHandler(index)}
              changed={event => nameChangeHandler(event, x.id)}
            />
          ))}
        </div>
      );
    }
    return persons;
  };

  const dynamicClasses = () => {
    let classes = [];

    if (personsState.persons.length <= 2) {
      classes.push(styles.red); // classes = ['red']
    }

    if (personsState.persons.length <= 1) {
      classes.push(styles.bold); // classes = ['red', 'bold']
    }

    return classes.join(" ");
  };

  return (
    <div className={styles.App}>
      <h1>Hello from React App!</h1>
      <p className={dynamicClasses()}>created by Darren Rambaud</p>
      <Button onClick={togglePersons}>~ Hide/Show Person(s) ~</Button>
      <div>{showPersons()}</div>
    </div>
  );
  // return React.createElement(
  // "div",
  // { className: "App" },
  // React.createElement("h1", null, "Hello from React App!")
  // );
};

export default App;
