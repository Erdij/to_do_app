import React, { useState } from "react";
import Todo from "./Todo";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    // console.log("changed");
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("buraya bakarlar");

    props.onSubmit({
      id: Math.floor(Math.random() * 100 + 1),
      text: input,
    }); //her submitte üretilene id ataması burada gerçekleştirilir.
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
