import React from "react";

const Person = props => {
  return (
    <p>
      I am a person and my name is {props.name}. I am {props.age} years old
    </p>
  );
};

export default Person;
