import { useNavigate } from "react-router-dom"

const Home = () => {
  const BASE_URL = (process.env.DATABASE_URL === window.location.href) ? process.env.DATABASE_URL :  `http://localhost:3001`

  console.log(BASE_URL)
  let navigate = useNavigate()
  const createCourse = () => {
    navigate(`/newcourse`)
  }
  const viewCourses = () => {
    navigate(`/allcourses`)
  }

  return (
    <div className="home">
      <h2 className="title">Stroke Caddy</h2>
      <div className="home-grid">
      <div className='card home-card' onClick={() => createCourse()}>
        <div className="info-wrapper">
          <h3>Create a New Course</h3>
        </div>
      </div>
      <div className='card home-card' onClick={() => viewCourses()}>
        <div className="info-wrapper">
          <h3>View Courses</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
