"use client";
import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

interface BoxBlock {
  amount: number;
  type?: string;
}

export default function TerminalBody() {
  return (
    <div className={style.list__wrapper}>
      <BoxBlock amount={30} />
    </div>
  );
}

function BoxBlock({ amount, type }: BoxBlock) {
  let blocks = [];
  for (let i = 0; i < amount; i++) {
    blocks.push(<li key={i} className={clsx(style.list__item)}></li>);
  }
  return <ol className={style.list}>{blocks}</ol>;
}
