"use client";
import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import VisuallyHidden from "@/components/isuallyhidden/VisuallyHidden";

const sponsorsData = [
  {
    id: 1,
    src: "/sponsors/gitlab.svg",
    width: 95,
    hegth: 42,
    alt: "gitLab",
  },
  {
    id: 2,
    src: "/sponsors/freeCodeCamp.svg",
    width: 130,
    hegth: 16,
    alt: "freeCodeCamp",
  },
  {
    id: 3,
    src: "/sponsors/google.svg",
    width: 86,
    hegth: 29,
    alt: "Google",
  },
  {
    id: 4,
    src: "/sponsors/amazon.svg",
    width: 86,
    hegth: 26,
    alt: "Amazon",
  },
  {
    id: 5,
    src: "/sponsors/facebook.svg",
    width: 95,
    hegth: 18,
    alt: "Facebook",
  },
  {
    id: 6,
    src: "/sponsors/uber.svg",
    width: 95,
    hegth: 33,
    alt: "Uber",
  },
  {
    id: 7,
    src: "/sponsors/intel.svg",
    width: 76,
    hegth: 50,
    alt: "Intel",
  },
  {
    id: 8,
    src: "/sponsors/code.svg",
    width: 95,
    hegth: 42,
    alt: "Code insitute",
  },
  {
    id: 9,
    src: "/sponsors/4geeks.svg",
    width: 86,
    hegth: 30,
    alt: "4Geeks academy",
  },
];

export default function SponsorsGroup() {
  return (
    <ul role="list" className={style.list}>
      {sponsorsData.map((item) => {
        return (
          <li key={item.id} className={style.list__item}>
            <Link href={"#"}>
              <Image
                src={item.src}
                width={item.width}
                height={item.hegth}
                alt={item.alt}
              />
              <VisuallyHidden>{item.alt}</VisuallyHidden>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
