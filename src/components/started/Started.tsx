import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import ReprositoryCard from "./reprositoryCard/ReprositoryCard";

export default function Started() {
  return (
    <section className={styles.started}>
      <Container>
        <h5 className={styles.started__title}>Get started now</h5>
        <div>
          <ReprositoryCard />
        </div>
      </Container>
    </section>
  );
}
