import React from "react";

const Card = (props) => {
  //   const { name, price, color } = props;
  //   const clr = color || "aqua"; default
  //   const clr = color ? color : "aqua";
  //   const clr = color && color;
  //   const headingStyle = {
  //     color: clr,
  //     fontSize: "24px",
  //   };
  const a = 10;
  const b = 20;
  // conditions in react/es6
  //   console.log(a > b ? true : false);
  //   console.log(a > b || false);
  //   console.log(a > b && true);
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px", margin: "10px" }}>
      {/* <h1 style={headingStyle}>Name: {name}</h1>
      <h4 style={headingStyle}>Price: {price}</h4> */}
    </div>
  );
};

export default Card;
