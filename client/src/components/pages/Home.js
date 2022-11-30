import React from 'react'
import api from '../../api'
import Groups from '../Groups'
import Loader from '../Loader'

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
    <>
      <Groups data={data.topTeams} />
    
    </>
  )
  return <Loader/>
}

export default Home