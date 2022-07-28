import { useNavigate } from "react-router-dom"

const CourseInfo = (props) => {
  let navigate = useNavigate()

  const showCourse = (course) => {
    navigate(`/course/details/${course._id}`)
  }

  return (
    <div className="course-card-grid">
      {
        props.courses.map((course) => (
          <div key={course._id} className="card course-card" onClick={() => showCourse(course)}>
            <div className="info-wrapper flex-col">
              <h3>{course.courseName}</h3>

            </div>
          </div>
        ))
      }
    </div>
  )

}

export default CourseInfo