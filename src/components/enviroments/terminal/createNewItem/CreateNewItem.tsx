import React from "react";
import style from "./style.module.css";

interface CreateNewItemProps {
  handleCreateTodo: (value: string) => void;
}

export default function CreateNewItem({
  handleCreateTodo,
}: CreateNewItemProps) {
  const [value, setValue] = React.useState("");
  return (
    <div className="create-new-todo-wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleCreateTodo(value);
          setValue("");
        }}
        className={style.form}
      >
        <label htmlFor="new-list-form-input" className={style.label}>
          <span>Gitpod</span> <span>/Workspace</span> <span>$</span>
        </label>
        <div className="row">
          <input
            placeholder="you can type here..."
            className={style.input}
            id="new-list-form-input"
            type="text"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
}
