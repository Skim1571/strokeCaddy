import { useState, useEffect  } from "react"
import { useParams } from 'react-router-dom'
import GameInfo from "../components/GameInfo"
import axios from "axios"
const BASE_URL = 'http://localhost:3001'

const Game = (props) => {
  const [courseInfo, setCourseInfo] = useState()
  const [isSubmit, setIsSubmit] = useState(false)
  const [courseHole, setCourseHole] = useState([])
  const [strokes, setStrokes] = useState([])

  let { courseId } = useParams();
  let { gameId } = useParams();

  useEffect(() => {
    const getCourseDetails = async () => {
      let res = await axios.get(`${BASE_URL}/${gameId}/${courseId}`);
      setCourseInfo(res.data);
      setIsSubmit(true)
    };
    getCourseDetails();
  }, [gameId]);

useEffect(()=>{
  const createStrokes = async () => {
    let res = await axios.post(`${BASE_URL}/${gameId}`, {gameId: gameId});
    console.log(res.data)
  }
})

  useEffect(()=>{
    const getStrokes = async () => {
      let res = await axios.get(`${BASE_URL}/${gameId}`)
      console.log(res.data)
    }
  },[strokes])



let output
  if(isSubmit){
    output = <GameInfo course={courseInfo}/>
  }

  return(
    <div>
      <h1>This is the game screen</h1>
      {output}
    </div>
  )
}

export default Game