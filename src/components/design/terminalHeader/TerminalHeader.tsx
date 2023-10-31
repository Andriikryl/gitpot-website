import React from "react";
import style from "./style.module.css";

export default function TerminalHeader() {
  return (
    <div className={style.header}>
      <div className={style.flex__group}>
        <div className={style.cicel}></div>
        <div className={style.cicel}></div>
        <div className={style.cicel}></div>
      </div>
    </div>
  );
}
