import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log(`[Persons.js] getDerivedStateFromProps ...`);
  //     return state;
  //   }

  //   componentWillReceiveProps(props) { // Removed/unsupposed in newer React versions!
  //     console.log(`[Persons.js] componentWillReceiveProps ...`);
  //     console.log(props);
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[Persons.js] shouldComponentUpdate ...`);
    if (nextProps.persons !== this.props.persons) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`[Persons.js] getSnapshotBeforeUpdate ...`);
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`[Persons.js] componentDidUpdate ...`);
    console.log(prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log(`[Persons.js] componentWillUnmount ...`);
  }

  render() {
    console.log(`[Persons.js] rendering ...`);
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
export default React.memo(Persons);
