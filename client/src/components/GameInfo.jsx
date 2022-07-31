import axios from 'axios'
import { useEffect, useState } from 'react'
const BASE_URL = `${process.env.API}`

const GameInfo = (props) => {
  const [gameStrokeList, setGameStrokeList] = useState([])
  const [strokeList, setStrokeList] = useState([])

  useEffect(() => {
    props.games.forEach((game) => {
      console.log(`eachgame`, game)
      setGameStrokeList([...gameStrokeList, game.strokes])
    })
  }, [props.games])

  useEffect(() => {
    console.log(`gamelist`, gameStrokeList)
    gameStrokeList.forEach((game) => {
      const getStrokes = async () => {
        let res = await axios.get(`${BASE_URL}/${game.strokes}`)
        console.log(`strokes`, res)
        strokeList.push(res)
      }
      getStrokes()
    })
  }, [props.games])


  return (
    <div className='scorecard grid'>
      <h2>Game Info Here</h2>
      {
      }
    </div>
  )
}

export default GameInfo