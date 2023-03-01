import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

export const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const add = (e: any) => {
    setInput(e.target.value);
  };
  const addTodoList = (e: any) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <form
      onSubmit={(e) => {
        addTodoList(e);
      }}
    >
      <input value={input} onChange={(e) => add(e)} />
      <button type="submit">Submit</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </form>
  );
};
