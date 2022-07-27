import { useEffect, useState } from 'react'
import axios from 'axios'
import GameInfo from '../components/GameInfo'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const BASE_URL = 'http://localhost:3001'

const Game = (props) => {
  


  return (
    <div>
            <div className='game'>
          <h2 className="title">Course Selection</h2>
          
        </div>
        <div className='game'>
          <h2 className="title">Game</h2>
          
        </div>
    </div>
  )

}

export default Game