import { useEffect, useState } from 'react'
import axios from 'axios'
import InputCourse from '../components/InputCourse'
const BASE_URL = 'http://localhost:3001'

const Newgame = (props) => {
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    coursePar: {}
  })
  const [isSubmit, setIsSubmit] = useState(false)
let showDetails

if(isSubmit){
  showDetails = <p>Course has been added</p>
}

  const postCourse = async (event) => {
      event.preventDefault()
      await axios.post(`${BASE_URL}/newcourse`, 
        newCourse
      )
      setIsSubmit(true)
    }

const handleChange = (event) => {
  const { id, value } = event.target;
  let courseUpdate = {...newCourse}
  switch (id) {
    case 'courseName':
      courseUpdate.courseName = value;
      setNewCourse(courseUpdate);
      break;
    case 'hole1':
      courseUpdate.coursePar = {...courseUpdate.coursePar, hole1: value};
      setNewCourse(courseUpdate);
      break;
    case 'hole2':
      courseUpdate.coursePar = {...courseUpdate.coursePar, hole2: value};
      setNewCourse(courseUpdate);
      break;
    case 'hole3':
      courseUpdate.coursePar = {...courseUpdate.coursePar, hole3: value};
        setNewCourse(courseUpdate);
      break;
    case 'hole4':
      courseUpdate.coursePar = {...courseUpdate.coursePar, hole4: value};
        setNewCourse(courseUpdate);
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