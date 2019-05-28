import React from "react";
import styled from "styled-components";
import styles from "./Cockpit.css";

const Cockpit = props => {
  const Button = styled.button`
    background: ${props.toggled.showPersons ? "red" : "green"};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    color: white;
    :hover {
      background: ${props.toggled.showPersons ? "salmon" : "lightgreen"};
      color: black;
    }
  `;

  const dynamicClasses = () => {
    let classes = [];
    if (props.persons.length <= 2) {
      classes.push(styles.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
      classes.push(styles.bold); // classes = ['red', 'bold']
    }

    return classes.join(" ");
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={dynamicClasses()}>created by Darren Rambaud</p>
      <Button onClick={props.toggle}>~ Hide/Show Person(s) ~</Button>
    </div>
  );
};

export default Cockpit;
