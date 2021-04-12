import React, { useRef, useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([1, 2]);
  const onKeyPressed = (e) => {
    if (e.key === "Enter") {
      console.log(text);
      const newList = [...list, text];
      setList(newList);
      setText("");
    }
  };
  return (
    <div>
      Todo
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => onKeyPressed(e)}
      />
      <ul>
        {list.map((n, i) => (
          <li key={i}>{`${i + 1}. ${n}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
