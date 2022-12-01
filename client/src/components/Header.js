import React from 'react'
import style from '../styles/Header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  const [activeMenuButton, setActiveMenuButton] = React.useState(false)

  React.useEffect(()=>{
    if(activeMenuButton){
      setTimeout(() => {
        setActiveMenuButton(false)
      }, 6000);
    }
  }, [activeMenuButton])


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

        <button onClick={()=> setActiveMenuButton(!activeMenuButton)} className={style.btnMobile}></button>

        {activeMenuButton && 
        
        <nav className={style.menuMobile}>
          <li><Link className={style.menuMobileItem} to={"/"}>Fase de grupos</Link></li>
          <li><Link className={style.menuMobileItemDisabled}>Oitavas</Link></li>
          <li><Link className={style.menuMobileItemDisabled}>Quartas</Link></li>
          <li><Link className={style.menuMobileItemDisabled}>Semifinal e final</Link></li>
        </nav>
        
        
        }

      </div>
    </header>
  )
}

export default Header