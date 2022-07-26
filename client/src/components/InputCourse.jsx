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
      <button type="submit">Submit</button>
    </form>
  )
}
export default InputCourse
