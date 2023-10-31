"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Terminal from "./terminal/Terminal";

export default function Enviroments() {
  return (
    <section className={style.environments}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.environments__info}>
            <h3 className={style.environments__title}>
              Think CI/CD for dev environments
            </h3>
            <p className={style.environments__description}>
              We invented prebuilds so application code, configuration and
              infrastructure can all be stored as machine-executable code in
              your git repositories and applied to dev environments
              automatically and continuously.
            </p>
            <div className={style.btn__group}>
              <button className={style.btn}>More on prebuilds</button>
              <button className={style.btn}>Documentation</button>
            </div>
          </div>
          <div>
            <Terminal />
          </div>
        </div>
      </Container>
    </section>
  );
}
