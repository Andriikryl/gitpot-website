import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import ListGroup from "./treeview/ListGroup";
import TerminalHeader from "./terminalHeader/TerminalHeader";
import AsideControls from "./asideControls/AsideControls";
import TerminalFooter from "./terminalFooter/TerminalFooter";
import TerminalBody from "./terminalBody/TerminalBody";
import Console from "./console/Console";

export default function Design() {
  return (
    <section className={style.design}>
      <Container>
        <h3 className={style.design__title}>Remote-first. Secure by design.</h3>
        <div className={style.terminal}>
          <TerminalHeader />
          <div className={style.flex__group}>
            <div>
              <div className={style.burger__box}>
                <div className={style.burger__line}></div>
                <div className={style.burger__line}></div>
                <div className={style.burger__line}></div>
              </div>
              <AsideControls />
            </div>
            <div>
              <div className={style.explore__wrapper}>
                <span>Eplorer</span>
                <div className={style.explore__group}>
                  <div className={style.cicel}></div>
                  <div className={style.cicel}></div>
                  <div className={style.cicel}></div>
                </div>
              </div>
              <div className={style.list__wrapper}>
                <ListGroup />
              </div>
            </div>
            <div className={style.body}>
              <TerminalBody />
              <Console />
            </div>
          </div>
          <TerminalFooter />
        </div>
      </Container>
    </section>
  );
}
