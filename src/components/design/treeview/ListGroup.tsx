"use client";
import React, { useState } from "react";
import { Treeview } from "./Treeview";
import { data } from "./data";
import style from "./style.module.css";

export default function ListGroup() {
  const [selected, select] = useState<string | null>(null);
  return (
    <Treeview.Root
      value={selected}
      onChange={select}
      label="Your Label"
      className={style.treeview__root}
    >
      {data.map((node) => (
        <Treeview.Node node={node} key={node.id} />
      ))}
    </Treeview.Root>
  );
}
