import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
const BASE_URL = 'http://localhost:3001'

const CourseSpecific = (props) => {
  const [newCourse, setNewCourse] = useState({
    ...props.holeDetails
  })
  const [isDisabled, setIsDisabled] = useState(true)
  const holeList = []
  newCourse.courseInfo.map((hole) => {
    holeList.push(hole)
  })

  let { courseId } = useParams()

  const update = () => {
    if (!isDisabled) {
      const updater = async () => {
        let res = await axios.put(`${BASE_URL}/course/details/${courseId}`,
          newCourse)
      }
      updater()
    }
    setIsDisabled(!isDisabled)
  }

  const handleChange = (event) => {
    const { id, value } = event.target
    const numValue = parseInt(value)
    let courseUpdate = { _id: newCourse._id, courseInfo: [...newCourse.courseInfo] }
    switch (id) {
      case '0':
        courseUpdate.courseInfo.splice(0, 1, { holeNum: 1, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '1':
        courseUpdate.courseInfo.splice(1, 1, { holeNum: 2, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '2':
        courseUpdate.courseInfo.splice(2, 1, { holeNum: 3, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '3':
        courseUpdate.courseInfo.splice(3, 1, { holeNum: 4, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '4':
        courseUpdate.courseInfo.splice(4, 1, { holeNum: 5, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '5':
        courseUpdate.courseInfo.splice(5, 1, { holeNum: 6, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '6':
        courseUpdate.courseInfo.splice(6, 1, { holeNum: 7, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '7':
        courseUpdate.courseInfo.splice(7, 1, { holeNum: 8, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '8':
        courseUpdate.courseInfo.splice(8, 1, { holeNum: 9, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '9':
        courseUpdate.courseInfo.splice(9, 1, { holeNum: 10, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '10':
        courseUpdate.courseInfo.splice(10, 1, { holeNum: 11, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '11':
        courseUpdate.courseInfo.splice(11, 1, { holeNum: 12, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '12':
        courseUpdate.courseInfo.splice(12, 1, { holeNum: 13, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '13':
        courseUpdate.courseInfo.splice(13, 1, { holeNum: 14, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '14':
        courseUpdate.courseInfo.splice(14, 1, { holeNum: 15, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '15':
        courseUpdate.courseInfo.splice(15, 1, { holeNum: 16, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '16':
        courseUpdate.courseInfo.splice(16, 1, { holeNum: 17, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      case '17':
        courseUpdate.courseInfo.splice(17, 1, { holeNum: 18, parNum: numValue });
        setNewCourse(courseUpdate);
        break;
      default:
    }
  };

  return (
    <ul>
      <button className="button" onClick={() => update()}>{isDisabled ? "Press to update" : "Submit Changes"}</button>
      {holeList.map((hole, index) => (
        <li key={index}>
          <label onChange={(event) => handleChange(event)}>Hole: {hole.holeNum}</label>
          <label>Par:</label>
          <input type="text" id={index} onChange={(event) => handleChange(event)} value={hole.parNum} disabled={isDisabled}></input>
        </li>
      )
      )}
    </ul>
  )
}


export default CourseSpecific