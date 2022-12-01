import React from "react";
import style from "../styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <h2>
          <Link className={style.title} to="/">
            Copa 2022
          </Link>
        </h2>

        <nav id={style.navId} class={style.nav}>
          <button id={style.btnMobile}>
            <span id={style.hamburger}></span>
          </button>

          <div>
            <ul id={style.menuDesktop} class={style.menuDesktop}>
              <li class={style.menuDesktopItem}>
                <Link>Quartas</Link>
              </li>
              <li class={style.menuDesktopItemDisabled}>
                <Link>Oitavas</Link>
              </li>
              <li class={style.menuDesktopItemDisabled}>
                <Link>Semifinal e final</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
