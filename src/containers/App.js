import React, { useState } from "react";
import styles from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Auxillary from "../hoc/Auxillary";

const App = props => {
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

  const showPersons = () => {
    return toggleState.showPersons ? (
      <div>
        <Persons
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={nameChangeHandler}
        />
      </div>
    ) : null;
  };

  return (
    <Auxillary>
      <Cockpit
        title={props.appTitle}
        personsLength={personsState.persons.length}
        toggled={toggleState}
        toggle={togglePersons}
      />
      {showPersons()}
    </Auxillary>
  );
  // return React.createElement(
  // "div",
  // { className: "App" },
  // React.createElement("h1", null, "Hello from React App!")
  // );
};

export default withClass(App, styles.App);
