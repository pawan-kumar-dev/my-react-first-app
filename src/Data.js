import React from "react";

const Data = (props) => {
  const { object, title } = props;
  const name = "React";
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      {title} :{object}
      <p>{`Name : ${name}`}</p>
    </div>
  );
};

export default Data;
