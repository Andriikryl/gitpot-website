import React from "react";
import styles from "./style.module.css";

const cosoleData = [
  "> gitpot-website@0.1.0 dev",
  "> next dev",
  "  ▲ Next.js 14.0.0",
  " - Local:        http://localhost:3000",
  " Ready in 2.8s",
  "(9:5) autoprefixer: end value has mixed support, consider using flex-end instead",
  "Import trace for requested module:",
  "./src/components/enviroments/terminal/style.module.css",
  "./src/components/enviroments/terminal/Terminal.tsx",
  "./src/components/enviroments/Enviroments.tsx",
];

export default function Console() {
  return (
    <div className={styles.console__wrapper}>
      <ul role="list" className={styles.list}>
        <li className={styles.list__item}>problems</li>
        <li className={styles.list__item}>output</li>
        <li className={styles.list__item}>terminal</li>
        <li className={styles.list__item}>debug console</li>
      </ul>
      <ul className={styles.console__body} role="list">
        {cosoleData.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
