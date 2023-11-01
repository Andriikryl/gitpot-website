import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "public/logo.svg";
import mainImage from "public/terminal/Activity Bar/source-control.svg";
import errorImage from "public/Common/error.svg";
import warningImage from "public/Common/warning.svg";

export default function TerminalFooter() {
  return (
    <div className={style.footer}>
      <Link href={"#"} className={style.logo}>
        <Image src={logo} width={71} height={20} alt="logo" />
      </Link>
      <Link href={"#"} className={style.search}>
        <Image src={mainImage} width={20} height={20} alt="" />
        <span>main</span>
      </Link>
      <span className={style.python}>Python3.8.8 64-bit(3.8.8)</span>
      <div className={style.flex__group}>
        <Link href={"#"}>
          <Image src={errorImage} width={20} height={20} alt="arror" />0
        </Link>
        <Link href={"#"}>
          <Image src={warningImage} width={20} height={20} alt="arror" />0
        </Link>
      </div>
    </div>
  );
}
