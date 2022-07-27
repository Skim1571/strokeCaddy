import { useEffect, useState } from 'react'
import axios from 'axios'
import GameInfo from '../components/GameInfo'
import { Link } from 'react-router-dom';
import CourseDropDown from '../components/CourseDropDown'
const BASE_URL = 'http://localhost:3001'

const Game = (props) => {
  const [selectedCourse, setSelectedCourse] = useState()
  const [isCreated, setIsCreated] = useState(false)

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const createGame = async (event) => {
    event.preventDefault()
    await axios.post(`${BASE_URL}/newgame`);
    setIsCreated(true)
  }

  if(isCreated){

  }

  return (
    <div>
            <div className='game'>
          <h2 className="title">Course Selection</h2>
          <CourseDropDown onChange={handleChange} onSubmit={createGame}/>
        </div>
        <div>
        <h2>Don't see the course you're playing on? Click below to enter it in.</h2>
          <Link to="/newCourse">Create New Course</Link>
        </div>
    </div>
  )

}

export default Game