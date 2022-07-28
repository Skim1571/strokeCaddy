import { useEffect, useState } from 'react'
import axios from 'axios'
import GameInfo from '../components/GameInfo'
const BASE_URL = 'http://localhost:3001'

const HistoricalGame = (props) => {
  const [listGames, setListGames] = useState()
  const [pressedDelete, setPressedDelete] = useState(false)
let showDetails

useEffect(()=>{
  const getGames = async () => {
    let res = await axios.get (`${BASE_URL}/historicalgames`)
    console.log(res.data)
    setListGames(res.data)
  }
  getGames()
},[])


  // const postCourse = async (event) => {
  //     event.preventDefault()
  //     await axios.post(`${BASE_URL}/newcourse`, 
  //       newCourse
  //     )
  //   }

      return (
        <div className="historicalGameDetails">
          <div >
            <h2>Historical Games</h2>
          </div>
          <GameInfo games={listGames} />
        </div>
      )
  }

  export default HistoricalGame