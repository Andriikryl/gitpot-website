"use client";
import React, { useState } from "react";
import { Menu } from "react-feather";
import useToggle from "../hooks/useToggle";
import Drawer from "./Drawer";
import VisuallyHidden from "../isuallyhidden/VisuallyHidden";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [activeState, setActiveState] = useState(false);
  const translateX = activeState ? "0%" : "100%";
  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <a href="#">Kaboom</a>
          <nav role="navigation" aria-label="Main menu">
            <button
              aria-expanded={activeState}
              className={styles.hamburgerBtn}
              onClick={handleClick}
            >
              <Menu aria-hidden="true" focusable="false" />
              <VisuallyHidden>Open main menu</VisuallyHidden>
            </button>
            <AnimatePresence>
              {activeState && (
                <Drawer
                  handleDismiss={handleClick}
                  // style={{ transform: `translateX(${translateX})` }}
                >
                  <ul className={styles.navigationList}>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">Gallery</a>
                    </li>
                    <li>
                      <a href="">Photographers</a>
                    </li>
                    <li>
                      <a href="">Submit Work</a>
                    </li>
                  </ul>
                </Drawer>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </Container>
    </header>
  );
}
