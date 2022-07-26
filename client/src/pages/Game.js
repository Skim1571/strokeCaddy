import { useEffect, useState } from 'react'
import axios from 'axios'
import GameInfo from '../components/GameInfo'
const BASE_URL = 'http://localhost:3001'

const Game = (props) => {
  

  return (
    <div>
        <div className='game'>
          <h2 className="title">Game</h2>
          <GameInfo />
        </div>
    </div>
  )

}

export default Game