"use client";
import React from "react";
import VisuallyHidden from "@/components/isuallyhidden/VisuallyHidden";
import styles from "./style.module.css";

interface Todo {
  value: string;
  id: number;
  isCompleted?: boolean;
}

interface TerminalListProps {
  todos: any[];
  handleToggleTodo: (id: number) => void;
}

export default function TerminalList({
  todos,
  handleToggleTodo,
}: TerminalListProps) {
  return (
    <ul className={styles.list} role="list">
      <li className={styles.prem__item}>
        <span>Compiling</span> <span>surf v1.0.3</span>
      </li>
      <li className={styles.prem__item}>
        <span>Compiling</span> <span>http-client v6.3.5</span>
      </li>
      <li className={styles.prem__item}>
        <span>Compiling</span> <span>surf v2.2.0</span>
      </li>
      <li className={styles.prem__item}>
        <span>Compiling</span> <span>git2 v0.13.17</span>
      </li>
      <li className={styles.prem__item}>
        <span>Compiling</span> <span>shadow-rs v0.5.24</span>
      </li>
      <li className={styles.prem__item}>
        <span>Compiling</span> <span>nu v0.28.0</span>
      </li>
      <li className={styles.prem__item}>
        <span>Installing</span> <span>/workspace/.cargo/bin/nu</span>
      </li>
      <li className={styles.prem__item}>
        <span>Finished</span> <span>dev target(s) in 12m 30s</span>
      </li>
      <li className={styles.item__exit}>exit</li>
      <li className={styles.prem__item}>
        This task run s a workspace prebuild
      </li>
      <li className={styles.prem__item}>Well done on saving 12 minutes</li>
      {todos.map(({ id, value, isCompleted }) => (
        <>
          <li key={id} className={styles.prem__item}>
            <button
              className={`
                    toggle
                    ${isCompleted ? "completed" : undefined}
                `}
              onClick={() => {
                handleToggleTodo(id);
              }}
              aria-label="toggle item"
            >
              {value}
              {isCompleted && <VisuallyHidden> (Completed)</VisuallyHidden>}
            </button>
          </li>
        </>
      ))}
    </ul>
  );
}
