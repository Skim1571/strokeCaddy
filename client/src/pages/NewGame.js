import { useEffect, useState } from 'react'
import axios from 'axios'
import GameInfo from '../components/GameInfo'
import { Link } from 'react-router-dom';
import CourseDropDown from '../components/CourseDropDown'
const BASE_URL = 'http://localhost:3001'

const Game = (props) => {
  const [selectedCourse, setSelectedCourse] = useState()

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };


  return (
    <div>
            <div className='game'>
          <h2 className="title">Course Selection</h2>
          <CourseDropDown onChange={handleChange}/>
        </div>
    </div>
  )

}

export default Game