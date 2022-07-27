import { useState } from "react"
const StrokeInfo = (props) => {
  const [strokeCount, setStrokeCount] = useState(0)

  return (
    <div className='scorecard-stroke grid'>
      <h2>Stroke Info Here</h2>
      {
        props.stroke.map((stroke) => (
          <div key={stroke.hole} className='scorecard'>
            <h3>Hole {stroke.hole}</h3>
            <h3>Stroke {strokeCount}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default StrokeInfo