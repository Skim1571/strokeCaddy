import { useEffect, useState } from 'react'
import axios from 'axios'
import GameInfo from '../components/GameInfo'
import { Link, useNavigate } from 'react-router-dom';
import CourseDropDown from '../components/CourseDropDown'
const BASE_URL = 'http://localhost:3001'

const Game = (props) => {
  const [selectedCourse, setSelectedCourse] = useState()
  const [gameId, setGameId] = useState()
  const [isCreated, setIsCreated] = useState(false)

  let navigate = useNavigate()

  const goToGame = (gameId, selectedCourse) => {
    navigate(`/${gameId}/${selectedCourse}`)
  }

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const createGame = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/newgame`, {courseId: selectedCourse});
    console.log(res.data)
    setGameId(res.data._id)
    setIsCreated(true)
  }

  if(isCreated){
    goToGame(gameId, selectedCourse)
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