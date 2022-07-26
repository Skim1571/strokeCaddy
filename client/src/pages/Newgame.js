import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import InputCourse from '../components/InputCourse'
const BASE_URL = 'http://localhost:3001'

const Newgame = (props) => {
  const [courseDetails, setCourseDetails] = useState({
    courseName: '',
    coursePar: []
  })
  const [isResponse, setIsResponse] = useState(null)
    
      const updateCheckStatus = (update) => {
        let newCourse = {courseName: courseDetails.courseName, coursePar: [...courseDetails.coursePar, update]}
        setCourseDetails(newCourse)
      }

    let showDetails

    const postCourse = async (event) => {
        event.preventDefault()
        await axios.post(`${BASE_URL}/newgame`, 
          courseDetails
        )
      }

const handleChange = (event) => {
  const { id, value } = event.target;
  let newCourse = {...newCourse}
  switch (id) {
    case 'courseName':
      newCourse.courseName = value;
      setCourseDetails(newCourse);
      break;
    case 'hole1':
      newCourse.coursePar.hole1 = value;
      setCourseDetails(newCourse);
      break;
    case 'hole2':
        newCourse.coursePar.hole2 = value;
        setCourseDetails(newCourse);
      break;
    case 'hole3':
        newCourse.coursePar.hole3 = value;
        setCourseDetails(newCourse);
      break;
    case 'hole4':
        newCourse.coursePar.hole4 = value;
        setCourseDetails(newCourse);
      break;
    default:
  }
};

      return (
        <div className="newGameDetails">
          <div >
            <h2>Input Course Information</h2>
          </div>
          <InputCourse onChange={handleChange} onSubmit={postCourse}/>
          {showDetails}
        </div>
      )
  }

  export default Newgame