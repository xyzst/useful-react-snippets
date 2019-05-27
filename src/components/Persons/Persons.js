import React from "react";
import Person from "./Person/Person";

const Persons = props =>
  props.persons.map((x, index) => (
    <Person
      key={x.id}
      name={x.name}
      age={x.age}
      click={() => props.clicked(index)}
      changed={event => props.changed(event, x.id)}
    />
  ));

export default Persons;
