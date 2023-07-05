import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>hello {props.name} component.</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Hello;
