import axios from 'axios'
import { useState, useEffect } from 'react';
const BASE_URL = 'http://localhost:3001'

const CourseDropDown = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [courseDetails, setCourseDetails] = useState()

  useEffect(() => {
    const getCourseDetails = async () => {
      let res = await axios.get(`${BASE_URL}/newgame`);
      setCourseDetails(res.data)
      setIsLoaded(true)
    };
    getCourseDetails()
  }, [])

  let dropdown
  if (isLoaded) {
    dropdown =
      <form onSubmit={props.onSubmit}>
        <select
          id="courseList"
          onChange={(event) => props.onChange(event)}
          value={courseDetails._id}>
          <option value="Select a course"> -- Select a Course -- </option>
          {courseDetails.map((course) => <option key={course._id} value={course._id}>{course.courseName}</option>)}
        </select>
        <button type="submit">Submit</button>
      </form>
  }

  return (
    <div>
      {dropdown}
    </div>
  )
}

export default CourseDropDown