import React from "react";
import style from "./style.module.css";
import Image from "next/image";

const controlsData = [
  {
    id: "1",
    src: "/terminal/Activity Bar/debug-alt.svg",
  },
  {
    id: "2",
    src: "/terminal/Activity Bar/debug.svg",
  },
  {
    id: "3",
    src: "/terminal/Activity Bar/extensions.svg",
  },
  {
    id: "4",
    src: "/terminal/Activity Bar/files.svg",
  },
  {
    id: "5",
    src: "/terminal/Activity Bar/search.svg",
  },
  {
    id: "6",
    src: "/terminal/Activity Bar/source-control.svg",
  },
  {
    id: "7",
    src: "/terminal/Activity Bar/settings-gear.svg",
  },
  {
    id: "8",
    src: "/terminal/Misc/v2.svg",
  },
];

export default function AsideControls() {
  return (
    <ul role="list" className={style.list}>
      {controlsData.map((item) => {
        return (
          <li key={item.id} className={style.item}>
            <Image src={item.src} width={30} height={30} alt="icon" />
          </li>
        );
      })}
    </ul>
  );
}
