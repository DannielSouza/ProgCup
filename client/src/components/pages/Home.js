import React from 'react'
import api from '../../api'
import Groups from '../Groups'
import Loader from '../Loader'
import style from '../../styles/Home.module.css'
import BestPlayers from '../BestPlayers'

const Home = () => {
  const [data, setData] = React.useState()
  const {getMainInfo} = api()

  React.useEffect(()=>{
    async function getHomeInfo(){
      const data = await getMainInfo()
      setData(data)
    }
    getHomeInfo()
  },[])

  if(data) return (
    <section className={style.homeContainer}>

      <BestPlayers data={data.topPlayers}/>

      <Groups data={data.topTeams} />
    
    </section>
  )
  return <Loader/>
}

export default Home