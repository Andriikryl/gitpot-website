import React from "react";
import style from "./style.module.css";
import imageAvatar from "public/developerCard/avatar-one.svg";
import CardDev from "../cardDev/CardDev";

const marquueData = [
  {
    id: 1,
    src: imageAvatar,
    description:
      "In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
    name: "Ben Halpern",
    position: "Creator and Co-founder",
    link: "@ThePracticalDev",
  },
  {
    id: 2,
    src: imageAvatar,
    description:
      "In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
    name: "Ben Halpern",
    position: "Developer Evangelist",
    link: "@ThePracticalDev",
  },
  {
    id: 3,
    src: imageAvatar,
    description:
      "In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
    name: "Ben Halpern",
    position: "Creator",
    link: "@ThePracticalDev",
  },
  {
    id: 4,
    src: imageAvatar,
    description:
      "In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
    name: "Ben Halpern",
    position: "Creator",
    link: "@ThePracticalDev",
  },
  {
    id: 5,
    src: imageAvatar,
    description:
      "In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
    name: "Ben Halpern",
    position: "Creator",
    link: "@ThePracticalDev",
  },
  {
    id: 6,
    src: imageAvatar,
    description:
      "In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
    name: "Ben Halpern",
    position: "Creator",
    link: "@ThePracticalDev",
  },
];

export default function Marquue() {
  return (
    <ul className={style.list} role="list">
      {marquueData.map(({ id, name, description, position, link, src }) => {
        return (
          <CardDev
            name={name}
            description={description}
            position={position}
            link={link}
            src={src}
            key={id}
          />
        );
      })}
    </ul>
  );
}
