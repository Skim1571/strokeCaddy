import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CourseSpecific from '../components/CourseSpecific'
import { useNavigate } from 'react-router-dom'
const BASE_URL = 'http://localhost:3001'

const CourseDetails = () => {
  const [selectedCourse, setSelectedCourse] = useState(false)
  const [courseDetails, setCourseDetails] = useState()
  const [holeDetails, setHoleDetails] = useState()
  let setInitialState = () => {
    setSelectedCourse()
    setCourseDetails()
    setHoleDetails()
  }

  let { courseId } = useParams()
  
  useEffect(() =>  {
    const getCourseDetails = async () => {
      let res = await axios.get(`${BASE_URL}/course/details/${courseId}`)
      setCourseDetails(res.data)
      setHoleDetails(res.data.coursePar)
      setSelectedCourse(true)
    }
      getCourseDetails()
    },[courseId])
    
  let nameOfCourse;
  let detailsOfCourse;

if(selectedCourse){
  nameOfCourse = !!courseDetails.courseName ? courseDetails.courseName : 'hello2'
  detailsOfCourse = !!holeDetails ? <CourseSpecific holeDetails={holeDetails} /> : ""
}

let navigate = useNavigate()

const removeCourse =  async () => {
    let res = await axios.delete(`${BASE_URL}/course/details/${courseId}`)
  setInitialState()
  alert('omg this worked')
  navigate(`/allcourse`)
  }

  return  (
    <div className="course-content">
      <section className="image-container">
        <div>
        {nameOfCourse}
        <button className="button" onClick={() => removeCourse()}>Press to Delete Course</button>
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          {detailsOfCourse}
        </div>
      </section>
    </div>
  )
}

export default CourseDetails
