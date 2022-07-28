import { useEffect, useState } from 'react'
import axios from 'axios'
import InputCourse from '../components/InputCourse'
const BASE_URL = 'http://localhost:3001'

const Newgame = (props) => {
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    courseInfo: []
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
      courseUpdate.courseInfo.push({holeNum: 1, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole2':
      courseUpdate.courseInfo.push({holeNum: 2, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole3':
      courseUpdate.courseInfo.push({holeNum: 3, parNum: value});
        setNewCourse(courseUpdate);
      break;
    case 'hole4':
      courseUpdate.courseInfo.push({holeNum: 4, parNum: value});
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