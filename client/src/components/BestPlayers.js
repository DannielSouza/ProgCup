import React from 'react'
import style from '../styles/BestPlayers.module.css'

const BestPlayers = ({data}) => {
  const [bestPlayers, setBestPlayers] = React.useState(data.slice(0,25))


  return (
    <ul className={style.mainContainer}>

      <h3 className={style.mainTitle}>Principais artilheiros</h3>

      <div className={style.mainHeader}>
        <p>Jogador</p>
        <p>Gols</p>
      </div>

      {bestPlayers.map(player=>{
        return (
          <li key={player.nome} className={style.listContainer}>
            <div className={style.detailsContainer}>
              <img className={style.playerPicture} src={player.foto} alt={`foto do ${player.nome}`}/>
              <img className={style.teamPicture} src={player.selecao} alt={`foto da seleção`}/>
              <div className={style.playerDetails}>
                <p>{player.nome}</p>
                <span>{player.posicao}</span>
            </div>


            </div>
            <span className={style.golsContainer}>{player.gols}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default BestPlayers