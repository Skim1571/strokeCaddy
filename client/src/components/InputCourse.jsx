const InputCourse = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        id="courseName"
        value={props.value}
        placeholder="Course Name"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="scoreCardImage"
        value={props.value}
        placeholder="ScorecardImage URL"
        onChange={(event) => props.onChange(event)}
      />
      <br />
      <br />
      <input
        type="text"
        id="hole1"
        value={props.value}
        placeholder="Hole 1"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole2"
        value={props.value}
        placeholder="Hole 2"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole3"
        value={props.value}
        placeholder="Hole 3"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole4"
        value={props.value}
        placeholder="Hole 4"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole5"
        value={props.value}
        placeholder="Hole 5"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole6"
        value={props.value}
        placeholder="Hole 6"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole7"
        value={props.value}
        placeholder="Hole 7"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole8"
        value={props.value}
        placeholder="Hole 8"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole9"
        value={props.value}
        placeholder="Hole 9"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole10"
        value={props.value}
        placeholder="Hole 10"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole11"
        value={props.value}
        placeholder="Hole 11"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole12"
        value={props.value}
        placeholder="Hole 12"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole13"
        value={props.value}
        placeholder="Hole 13"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole14"
        value={props.value}
        placeholder="Hole 14"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole15"
        value={props.value}
        placeholder="Hole 15"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole16"
        value={props.value}
        placeholder="Hole 16"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole17"
        value={props.value}
        placeholder="Hole 17"
        onChange={(event) => props.onChange(event)}
      />
      <input
        type="text"
        id="hole18"
        value={props.value}
        placeholder="Hole 18"
        onChange={(event) => props.onChange(event)}
      />
      <button className="submitbutton" type="submit">Submit</button>
    </form>
  )
}
export default InputCourse
