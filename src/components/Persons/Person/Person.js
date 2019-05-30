import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";
import "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); // Available since React 13.x - refers to any reference object, more modern approach
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
    // this.inputElement.focus();
    // document.querySelector("input").focus(); NOT OPTIMAL! USE REFS INSTEAD
  }
  render() {
    console.log(`[Person.js] rendering ...`);
    return (
      <PersonDiv>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please log in!</p>
        )}
        <p onClick={this.props.click}>
          I am a person and my name is {this.props.name}. I am {this.props.age}{" "}
          years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={inputEl => {
          //   this.inputElement = inputEl; // older approach to using refs
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </PersonDiv>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

const PersonDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

export default Person;
