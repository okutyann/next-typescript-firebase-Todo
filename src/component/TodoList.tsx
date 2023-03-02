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
    if (input === "") {
      alert("入力してください。");
      return;
    }

    // some
    // todosの中からinputと同じものがあればtrue
    // なければfalseを返す
    if (todos.some((todo) => todo === input)) {
      alert("既に追加されています。");
      setInput("");
      return;
    }

    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className={styles.main}>
      <form
        onSubmit={(e) => {
          addTodoList(e);
        }}
      >
        <h1>TodoList</h1>
        <input
          className={styles.input}
          value={input}
          onChange={(e) => add(e)}
        />
        <ul className={styles.ul}>
          {todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" />
              {todo}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};
