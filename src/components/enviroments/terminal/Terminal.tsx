"use client";
import React from "react";
import TerminalList from "./terminalList/TerminalList";
import CreateNewItem from "./createNewItem/CreateNewItem";
import style from "./style.module.css";

export default function Terminal() {
  const [todos, setTodos] = React.useState<
    Array<{ value: string; id: string; isCompleted?: boolean }>
  >([]);
  function handleCreateTodo(value: string) {
    setTodos([
      ...todos,
      {
        value,
        id: crypto.randomUUID(),
      },
    ]);
  }

  function handleToggleTodo(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id.toString()) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  }

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.cicel}></div>
      </div>
      <div className={style.list__wrapper}>
        <TerminalList todos={todos} handleToggleTodo={handleToggleTodo} />
        <CreateNewItem handleCreateTodo={handleCreateTodo} />
      </div>
    </div>
  );
}
