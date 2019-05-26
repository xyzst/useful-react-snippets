import React from "react";

const Person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I am a person and my name is {props.name}. I am {props.age} years old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
