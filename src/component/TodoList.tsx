import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

type TypeTodo = {
  text: string;
  isCompleted: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<TypeTodo[]>([]);
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
    if (todos.some((todo) => todo.text === input)) {
      alert("既に追加されています。");
      setInput("");
      return;
    }

    const newTodo: TypeTodo = {
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  const completed = (e: any, index: number) => {
    // e.target.checked ? alert("完了") : alert("未完了");
    console.log(e.target.checked, index);
    const newTodo = todos.map((todo, i) => {
      if (i === index) {
        todo.isCompleted = e.target.checked;
      }
      return todo;
    });
    setTodos(newTodo);
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
          {todos.length !== 0 &&
            todos.map((todo, index) => (
              <div key={todo.text}>
                {!todo.isCompleted && (
                  <li>
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={(e) => completed(e, index)}
                    />
                    {todo.text}
                  </li>
                )}
              </div>
            ))}
        </ul>
        <hr />
        <ul className={styles.ul}>
          {todos.length !== 0 &&
            todos.map((todo, index) => (
              <div key={todo.text}>
                {todo.isCompleted && (
                  <li>
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={(e) => completed(e, index)}
                    />
                    {todo.text}
                  </li>
                )}
              </div>
            ))}
        </ul>
      </form>
    </div>
  );
};
