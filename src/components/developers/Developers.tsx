import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import Marquue from "./Marquue/Marquue";
import CardDev from "./cardDev/CardDev";

export default function Developers() {
  return (
    <section className={style.developers}>
      <Container>
        <h5 className={style.developers__title}>
          Used by 400,000+ developers.
        </h5>
        <div>
          <Marquue />
        </div>
      </Container>
    </section>
  );
}
