"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import HeroMainImage from "public/hero/hero-contante.png";
import Image from "next/image";
import Link from "next/link";
import VisuallyHidden from "../isuallyhidden/VisuallyHidden";

const LinksData = [
  {
    id: "1",
    title: "gitLab",
    src: "/hero/gitLab.svg",
    width: 29,
    hegth: 29,
    alt: "gitLab",
  },
  {
    id: "2",
    title: "GitHab",
    src: "/hero/gitHab.svg",
    width: 29,
    hegth: 29,
    alt: "GitHab",
  },
  {
    id: "3",
    title: "Css",
    src: "/hero/css.svg",
    width: 29,
    hegth: 29,
    alt: "Css",
  },
];

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.hero__info}>
            <h1 className={style.hero__title}>
              Always <br />
              Ready to Code.
            </h1>
            <p className={style.hero__description}>
              Spin up fresh, automated dev environments for each task, in the
              cloud, in seconds.
            </p>
            <div className={style.content__group}>
              <button className={style.btn}>Try Now</button>
              <div>
                <span className={style.content__text}>Open a workspace.</span>
                <span className={style.content__text}>
                  Start from any Git context.
                </span>
              </div>
            </div>
            <ul role="list" className={style.hero__list}>
              {LinksData.map(({ id, alt, title, src, width, hegth }) => {
                return (
                  <li key={id} className={style.list__item}>
                    <Link href={"#"} className={style.item__link}>
                      <VisuallyHidden>{title}</VisuallyHidden>
                      <Image src={src} width={width} height={hegth} alt={alt} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.hero__image}>
            <Image
              src={HeroMainImage}
              width={630}
              height={652}
              alt="hero image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
