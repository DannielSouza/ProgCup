import axios from 'axios'

export  default function api(){

  async function getMainInfo(){
    const response = await axios.get('http://localhost:4000')
    const data = await response.data

    return data
  }


  return {getMainInfo}
}