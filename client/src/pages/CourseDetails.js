import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CourseSpecific from '../components/CourseSpecific'
import { useNavigate } from 'react-router-dom'
const BASE_URL = `${process.env.API}`

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
  let isDisabled = true
  
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
  let scoreCardImg;

if(selectedCourse){
  nameOfCourse = !!courseDetails.courseName ? <h1>{courseDetails.courseName}</h1> : ''
  detailsOfCourse = !!holeDetails ? <CourseSpecific isDisabled={isDisabled} holeDetails={holeDetails} /> : ""
  scoreCardImg = !!courseDetails.courseScoreCardImage ? <img src={courseDetails.courseScoreCardImage} alt="image" /> : ""
}

let navigate = useNavigate()

const removeCourse =  async () => {
  if(window.confirm(`Do you really want to delete the course?`)){
    let res = await axios.delete(`${BASE_URL}/course/details/${courseId}`)
    setInitialState()
    alert(`${courseDetails.courseName} has been deleted`)
    navigate(`/allcourses`)
  }
  }

  return  (
    <div className="course-content">
      <button className="button" onClick={() => removeCourse()}>Press to Delete Course</button>
      <section className="image-container">
        <div>
          {nameOfCourse}
        </div>
        <div className="img-wrapper">
          {scoreCardImg}
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
