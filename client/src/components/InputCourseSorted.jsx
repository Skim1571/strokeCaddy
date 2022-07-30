const Input9HoleCourse = () => {

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
      <br />
      <br />
      <button type="submit">Submit</button>
      <br />
      <br />
    </form>
  )
}
export default Input9HoleCourse