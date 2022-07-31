import { useEffect, useState } from 'react'
import axios from 'axios'
import CourseInfo from '../components/CourseInfo'
const BASE_URL = `https://strokecaddy.herokuapp.com/`

const AllCourses = (props) => {
  const [listCourses, setListCourses] = useState()
  const [pressedDelete, setPressedDelete] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
let courseOutput

useEffect(()=>{
  const getCourses = async () => {
    let res = await axios.get (`${BASE_URL}/allcourses`)
    setListCourses(res.data)
    setIsSubmit(true)
  }
  getCourses()
},[])

if(isSubmit){
  courseOutput = <CourseInfo courses={listCourses} />
}

      return (
        <div className="allcourses">
          <div >
            <h2>All Courses</h2>
          </div>
            {courseOutput}
          </div>
      )
  }

  export default AllCourses