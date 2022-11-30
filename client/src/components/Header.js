import React from 'react'
import style from '../styles/Header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <h2><Link className={style.title} to="/">Copa 2022</Link></h2>

        <nav className={style.menu}>
          <li><Link className={style.menuItem} to={"/"}>Fase de grupos</Link></li>
          <li><Link className={style.menuItemDisabled}>Oitavas</Link></li>
          <li><Link className={style.menuItemDisabled}>Quartas</Link></li>
          <li><Link className={style.menuItemDisabled}>Semifinal e final</Link></li>
        </nav>
      </div>
    </header>
  )
}

export default Header