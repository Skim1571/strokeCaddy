import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
const BASE_URL = 'http://localhost:3001'

const CourseDropDown = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [courseDetails, setCourseDetails] = useState()

  useEffect(() => {
    const getCourseDetails = async () => {
      let res = await axios.get(`${BASE_URL}/newgame`);
      console.log(res.data)
      setCourseDetails(res.data)
      setIsLoaded(true)
    };
    getCourseDetails()
  }, [])

  let dropdown
  if (isLoaded) {
    dropdown =
      <form>
        <select id="courseList" onChange={handleChange}>
          <option value="Select a course"> -- Select a Course -- </option>
          {courseDetails.map((course) => <option key={course._id} value={course.courseName}>{course.courseName}</option>)}
        </select>
      </form>
  }

  return (
    <div>
      {dropdown}
    </div>
  )
}

export default CourseDropDown