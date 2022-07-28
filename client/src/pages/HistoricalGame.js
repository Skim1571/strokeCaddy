import { useEffect, useState } from 'react'
import axios from 'axios'
import CourseInfo from '../components/CourseInfo'
const BASE_URL = 'http://localhost:3001'

const HistoricalGame = (props) => {
  const [listCourses, setListCourses] = useState()
  const [pressedDelete, setPressedDelete] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
let courseOutput

useEffect(()=>{
  const getCourses = async () => {
    let res = await axios.get (`${BASE_URL}/historicalgames`)
    setListCourses(res.data)
    setIsSubmit(true)
  }
  getCourses()
},[])

if(isSubmit){
  courseOutput = <CourseInfo courses={listCourses} />
}

  // const postCourse = async (event) => {
  //     event.preventDefault()
  //     await axios.post(`${BASE_URL}/newcourse`, 
  //       newCourse
  //     )
  //   }

      return (
        <div className="historicalGameDetails">
          <div >
            <h2>Historical Games</h2>
          </div>
          {courseOutput}
        </div>
      )
  }

  export default HistoricalGame