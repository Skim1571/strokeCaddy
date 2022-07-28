import { useState, useEffect  } from "react"
import { useParams } from 'react-router-dom'
import CourseInfo from "../components/CourseInfo"
import axios from "axios"
const BASE_URL = 'http://localhost:3001'

const Game = (props) => {
  const [courseInfo, setCourseInfo] = useState()
  const [isSubmit, setIsSubmit] = useState(false)
  const [courseHole, setCourseHole] = useState([])
  const [strokes, setStrokes] = useState([])

  let { courseId } = useParams();
  let { gameId } = useParams();

//   useEffect(() => {
//     const getCourseDetails = async () => {
//       let res = await axios.get(`${BASE_URL}/${gameId}/${courseId}`);
//       setCourseInfo(res.data);
//       setIsSubmit(true)
//     };
//     getCourseDetails();
//   }, [gameId]);

// useEffect(()=>{
//   const createStrokes = async () => {
//     let res = await axios.post(`${BASE_URL}/${gameId}`, {gameId: gameId});
//     console.log(res.data)
//   }
// })

//   useEffect(()=>{
//     const getStrokes = async () => {
//       let res = await axios.get(`${BASE_URL}/${gameId}`)
//       console.log(res.data)
//     }
//   },[strokes])



let courseOutput
  if(isSubmit){
    courseOutput = <CourseInfo course={courseInfo}/>
  }

  return(
    <div>
      <h1>This is the game screen</h1>
      {courseOutput}
    </div>
  )
}

export default Game