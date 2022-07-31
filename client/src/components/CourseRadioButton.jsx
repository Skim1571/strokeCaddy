const CourseRadioButton = (props) => {


  return (
    <form className="radio">
      <label className="radioLabel">
        18 Holes
      </label>
      <input type="radio" name="holeSelection18" id="holeSelection18" value="18Holes" checked={props.holeSelection === "18Holes"} onChange={(event) => props.onChange(event)} />
      <label className="radioLabel">
        9 Holes
      </label>
      <input type="radio" id="holeSelection9" value="9Holes" checked={props.holeSelection === "9Holes"} onChange={(event) => props.onChange(event)} />
    </form>
  )
}

export default CourseRadioButton