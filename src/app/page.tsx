import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import PreviBlock from "@/components/previBlock/PreviBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <PreviBlock />
    </>
  );
}
