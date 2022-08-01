import { useEffect, useState } from 'react'
import axios from 'axios'
import InputCourse from '../components/InputCourse'
import Input9HoleCourse from '../components/Input9HoleCourse'
import CourseRadioButton from '../components/CourseRadioButton'
const BASE_URL = `http://localhost:3001`

const Newgame = (props) => {
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    courseScoreCardImage: '',
    courseInfo: []
  })
  const [isSubmit, setIsSubmit] = useState(false)
  const [holeSelection, setHoleSelection] = useState("18Holes")
  const initialState18 = 
{  courseName: '',
  courseScoreCardImage: '',
  courseInfo: [
    {holeNum: 1, parNum: '0'},
    {holeNum: 2, parNum: '0'},
    {holeNum: 3, parNum: '0'},
    {holeNum: 4, parNum: '0'},
    {holeNum: 5, parNum: '0'},
    {holeNum: 6, parNum: '0'},
    {holeNum: 7, parNum: '0'},
    {holeNum: 8, parNum: '0'},
    {holeNum: 9, parNum: '0'},
    {holeNum: 10, parNum: '0'},
    {holeNum: 11, parNum: '0'},
    {holeNum: 12, parNum: '0'},
    {holeNum: 13, parNum: '0'},
    {holeNum: 14, parNum: '0'},
    {holeNum: 15, parNum: '0'},
    {holeNum: 16, parNum: '0'},
    {holeNum: 17, parNum: '0'},
    {holeNum: 18, parNum: '0'}
  ]}
  const initialState9 = 
  {  courseName: '',
    courseScoreCardImage: '',
    courseInfo: [
      {holeNum: 1, parNum: '0'},
      {holeNum: 2, parNum: '0'},
      {holeNum: 3, parNum: '0'},
      {holeNum: 4, parNum: '0'},
      {holeNum: 5, parNum: '0'},
      {holeNum: 6, parNum: '0'},
      {holeNum: 7, parNum: '0'},
      {holeNum: 8, parNum: '0'},
      {holeNum: 9, parNum: '0'},
    ]}
let showConfirmation

if(isSubmit){
  showConfirmation = <p>Course has been added</p>
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
  let courseUpdate = {courseName: newCourse.courseName, courseScoreCardImage: newCourse.courseScoreCardImage, courseInfo: [...newCourse.courseInfo]}
  switch (id) {
    case 'courseName':
      courseUpdate.courseName  = value;
      setNewCourse(courseUpdate);
      break;
    case 'scoreCardImage':
      courseUpdate.courseScoreCardImage  = value;
      setNewCourse(courseUpdate);
      break;
    case 'hole1':
      courseUpdate.courseInfo.splice(0,1,{holeNum: 1, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole2':
      courseUpdate.courseInfo.splice(1,1,{holeNum: 2, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole3':
      courseUpdate.courseInfo.splice(2,1,{holeNum: 3, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole4':
      courseUpdate.courseInfo.splice(3,1,{holeNum: 4, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole5':
      courseUpdate.courseInfo.splice(4,1,{holeNum: 5, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole6':
      courseUpdate.courseInfo.splice(5,1,{holeNum: 6, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole7':
      courseUpdate.courseInfo.splice(6,1,{holeNum: 7, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole8':
      courseUpdate.courseInfo.splice(7,1,{holeNum: 8, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole9':
      courseUpdate.courseInfo.splice(8,1,{holeNum: 9, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole10':
      courseUpdate.courseInfo.splice(9,1,{holeNum: 10, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole11':
      courseUpdate.courseInfo.splice(10,1,{holeNum: 11, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole12':
      courseUpdate.courseInfo.splice(11,1,{holeNum: 12, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole13':
      courseUpdate.courseInfo.splice(12,1,{holeNum: 13, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole14':
      courseUpdate.courseInfo.splice(13,1,{holeNum: 14, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole15':
      courseUpdate.courseInfo.splice(14,1,{holeNum: 15, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole16':
      courseUpdate.courseInfo.splice(15,1,{holeNum: 16, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole17':
      courseUpdate.courseInfo.splice(16,1,{holeNum: 17, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'hole18':
      courseUpdate.courseInfo.splice(17,1,{holeNum: 18, parNum: value});
      setNewCourse(courseUpdate);
      break;
    case 'holeSelection18':
      setHoleSelection(value);
      setNewCourse(initialState18)
      break;
    case 'holeSelection9':
      setHoleSelection(value);
      setNewCourse(initialState9)
      break;
    default:
  }
};

let showInput = (holeSelection === "18Holes") ? <InputCourse onChange={handleChange} onSubmit={postCourse}/> : <Input9HoleCourse onChange={handleChange} onSubmit={postCourse}/>

      return (
        <div className="newGameDetails">
          <div >
            <h2>Input Course Information</h2>
            <CourseRadioButton holeSelection={holeSelection} onChange={handleChange}/>
          </div>
            {showInput}
            {showConfirmation}
        </div>
      )
  }

  export default Newgame