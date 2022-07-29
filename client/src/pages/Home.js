import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
const BASE_URL = 'http://localhost:3001'

const Home = () => {


  let navigate = useNavigate()
  const createCourse = () => {
    navigate(`/newcourse`)
  }
  const viewCourses = () => {
    navigate(`/allcourses`)
  }

  return (
    <body>
    <div className="home">
      <h2 className="title">Stroke Caddy</h2>
      <div className="home-grid">
      <div className='card' onClick={() => createCourse()}>
        <div className="info-wrapper">
          <h3>Create a New Course</h3>
        </div>
      </div>
      <div className='card' onClick={() => viewCourses()}>
        <div className="info-wrapper">
          <h3>View Courses</h3>
        </div>
      </div>
      </div>
    </div>
    </body>

  )
}

export default Home
