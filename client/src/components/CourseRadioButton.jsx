const CourseRadioButton = (props) => {


  return (
    <form>
      <label>
        <input type="radio" id="holeSelection18" value="18Holes" checked={props.holeSelection === "18holes"} onChange={(event) => props.onChange(event)} />
        18 Holes
      </label>
      <label>
        <input type="radio" id="holeSelection9" value="9Holes" checked={props.holeSelection === "9holes"} onChange={(event) => props.onChange(event)} />
        9 Holes
      </label>
    </form>
  )
}

export default CourseRadioButton