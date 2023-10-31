import React from "react";
import style from "./style.module.css";
import imageAvatar from "public/developerCard/avatar-one.svg";
import Image from "next/image";
import Link from "next/link";

interface cardDevProps {
  description: string;
  src: string;
  name: string;
  position: string;
  link: string;
}

export default function CardDev({
  description,
  src,
  name,
  position,
  link,
}: cardDevProps) {
  return (
    <li className={style.card}>
      <p className={style.card__description}>{description}</p>
      <div className={style.flex__group}>
        <div className={style.image__block}>
          <Image src={src} width={48} height={48} alt="avatar" />
        </div>
        <div className={style.card__name}>
          <span>{name}</span>
          <span>{position}</span> <Link href={"#"}>{link}</Link>
        </div>
      </div>
    </li>
  );
}
