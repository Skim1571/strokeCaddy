const CourseSpecific = (props) => {
  const holeList = []
  props.holeDetails.courseInfo.map((hole) => {
    holeList.push(hole)
  })

  console.log(`holeList`, holeList)
  return (
    <ul>
      {holeList.map((hole, index) => (
        <li key={hole._id}>
          Hole: {hole.holeNum} Par: {hole.parNum}
        </li>
      )
      )}
    </ul>
  )
}


export default CourseSpecific