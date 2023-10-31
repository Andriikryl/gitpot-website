import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import ListGroup from "./treeview/ListGroup";

export default function Design() {
  return (
    <section className={style.design}>
      <Container>
        <h3 className={style.design__title}>Remote-first. Secure by design.</h3>
        <div>
          <ListGroup />
        </div>
      </Container>
    </section>
  );
}
