import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;


/*
import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    //if prev value is true..return false and vice versa
    setIsDone((prev) => {
      return !prev;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : null }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
*/

