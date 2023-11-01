"use client";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import VisuallyHidden from "@/components/isuallyhidden/VisuallyHidden";
import Image from "next/image";

const LinksData = [
  {
    id: "1",
    title: "Continue with GitLab",
    src: "/hero/gitLab.svg",
    width: 29,
    hegth: 29,
    alt: "gitLab",
  },
  {
    id: "2",
    title: "Continue with GitHub",
    src: "/hero/gitHab.svg",
    width: 29,
    hegth: 29,
    alt: "GitHab",
  },
  {
    id: "3",
    title: "Continue with Bitbucket",
    src: "/hero/css.svg",
    width: 29,
    hegth: 29,
    alt: "Bitbucket",
  },
];

export default function ReprositoryCard() {
  return (
    <article className={styles.card}>
      <h5 className={styles.card__title}>Connect Git repository</h5>
      <p className={styles.card__descr}>
        Select a Git provider to start with an existing project from any Git
        context.
      </p>
      <ul role="list" className={styles.hero__list}>
        {LinksData.map(({ id, alt, title, src, width, hegth }) => {
          return (
            <li key={id} className={styles.list__item}>
              <Link href={"#"} className={styles.item__link}>
                <Image src={src} width={width} height={hegth} alt={alt} />
                <span>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className={styles.card__descriptionSec}>
        Or prefix any GitLab, GitHub or Bitbucket URL with
      </p>
      <span className={styles.hesh}>gitpod.io/#</span>
    </article>
  );
}
