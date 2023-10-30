import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
export default function PreviBlock() {
  return (
    <div className={style.Previe}>
      <Container>
        <h2 className={style.previ__title}>
          Select project, <br />
          <span>check dependencies, checkout branch, view</span> <br />
          <span>readme.txt, install tools, run build, run test,</span> <br />
          start coding.
        </h2>
      </Container>
    </div>
  );
}
