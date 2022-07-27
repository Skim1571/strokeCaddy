const GameInfo = (props) => {

  return (
    <div className='scorecard grid'>
      <h2>Game Info Here</h2>
      {
        props.course.coursePar.map((course) => (
          <div key={course.hole} className='scorecard'>
            <h3>Hole {course.hole}</h3>
            <h3>Par {course.par}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default GameInfo