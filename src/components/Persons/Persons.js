import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  render() {
    return this.props.persons.map((x, index) => (
      <Person
        key={x.id}
        name={x.name}
        age={x.age}
        click={() => this.props.clicked(index)}
        changed={event => this.props.changed(event, x.id)}
      />
    ));
  }
}
export default Persons;
