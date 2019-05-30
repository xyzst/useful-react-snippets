import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import styles from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  // const toggleBtnRef = React.createRef(); // DOES NOT WORK IN FUNC COMPONENTS
  const toggleBtnRef = useRef(null);

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

  useEffect(() => {
    toggleBtnRef.current.click();
    console.log(`[Cockpit.js] useEffect ...`);
    const timer = setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      console.log(`[Cockpit.js] cleanup ...`);
      clearTimeout(timer);
    };
  }, [props.persons]);

  const dynamicClasses = () => {
    let classes = [];
    if (props.personsLength <= 2) {
      classes.push(styles.red); // classes = ['red']
    }

    if (props.personsLength <= 1) {
      classes.push(styles.bold); // classes = ['red', 'bold']
    }

    return classes.join(" ");
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={dynamicClasses()}>created by Darren Rambaud</p>
      <Button ref={toggleBtnRef} onClick={props.toggle}>
        ~ Hide/Show Person(s) ~
      </Button>
      <AuthContext.Consumer>
        {context => <Button onClick={context.login}>Log in</Button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default Cockpit;
