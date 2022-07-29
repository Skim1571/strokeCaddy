import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
const BASE_URL = 'http://localhost:3001'

const CourseSpecific = (props) => {
  const [newCourse, setNewCourse] = useState({
    courseInfo: [, , , , , , , , , , , , , , , , ,]
  })
  const [isDisabled, setIsDisabled] = useState(true)
  const holeList = []
  props.holeDetails.courseInfo.map((hole) => {
    holeList.push(hole)
  })

  let { courseId } = useParams

  const update = () => {
    if (!isDisabled) {
      const updater = async () => {
        let res = await axios.put(`${BASE_URL}/course/details/${courseId}`)
      }
    }
    setIsDisabled(!isDisabled)
  }

  const handleChange = (event) => {
    const { key, value } = event.target
    let courseUpdate = { courseInfo: [...newCourse.courseInfo] }
    switch (key) {
      case 'hole1':
        courseUpdate.courseInfo.splice(0, 1, { holeNum: 1, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole2':
        courseUpdate.courseInfo.splice(1, 1, { holeNum: 2, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole3':
        courseUpdate.courseInfo.splice(2, 1, { holeNum: 3, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole4':
        courseUpdate.courseInfo.splice(3, 1, { holeNum: 4, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole5':
        courseUpdate.courseInfo.splice(4, 1, { holeNum: 5, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole6':
        courseUpdate.courseInfo.splice(5, 1, { holeNum: 6, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole7':
        courseUpdate.courseInfo.splice(6, 1, { holeNum: 7, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole8':
        courseUpdate.courseInfo.splice(7, 1, { holeNum: 8, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole9':
        courseUpdate.courseInfo.splice(8, 1, { holeNum: 9, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole10':
        courseUpdate.courseInfo.splice(9, 1, { holeNum: 10, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole11':
        courseUpdate.courseInfo.splice(10, 1, { holeNum: 11, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole12':
        courseUpdate.courseInfo.splice(11, 1, { holeNum: 12, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole13':
        courseUpdate.courseInfo.splice(12, 1, { holeNum: 13, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole14':
        courseUpdate.courseInfo.splice(13, 1, { holeNum: 14, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole15':
        courseUpdate.courseInfo.splice(14, 1, { holeNum: 15, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole16':
        courseUpdate.courseInfo.splice(15, 1, { holeNum: 16, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole17':
        courseUpdate.courseInfo.splice(16, 1, { holeNum: 17, parNum: value });
        setNewCourse(courseUpdate);
        break;
      case 'hole18':
        courseUpdate.courseInfo.splice(17, 1, { holeNum: 18, parNum: value });
        setNewCourse(courseUpdate);
        break;
      default:
    }
  };



  return (
    <ul>
      <button className="button" onClick={() => update()}>{isDisabled ? "Press to update" : "Submit Changes"}</button>
      {holeList.map((hole, index) => (
        <li key={hole.holeNum}>
          <label onChange={(event) => handleChange(event)}>Hole: {hole.holeNum}</label>
          <label>Par:</label>
          <input type="text" onChange={(event) => handleChange(event)} placeholder={hole.parNum} disabled={isDisabled} onChange={handleChange}></input>
        </li>
      )
      )}
    </ul>
  )
}


export default CourseSpecific