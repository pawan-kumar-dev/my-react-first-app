import React, { useState } from "react";

const Card = (props) => {
  const { name, price } = props;
  const [state, setState] = useState(12);
  // const [count, setCount] = useState(10);
  const headingStyle = {
    fontSize: "24px",
  };
  // const ary = [12, 3445];
  // console.log(ary[0], ary[1]);
  // const a = 10;
  // const b = 20;
  // conditions in react/es6
  //   console.log(a > b ? true : false);
  //   console.log(a > b || false);
  //   console.log(a > b && true);
  console.log(props.children);
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px", margin: "10px" }}>
      <h1 style={headingStyle}>Name: {name}</h1>
      <h4 style={headingStyle}>Price: {price}</h4>
      <button onClick={() => setState(state + 1)}>Click</button>
      <p>{state}</p>
    </div>
  );
};

export default Card;
