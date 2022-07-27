import axios from 'axios'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const BASE_URL = 'http://localhost:3001'

const GameInfo = () => {
  const [newState, setNewState] = useState()

  let { courseId } = useParams();
  let { gameId } = useParams();

  // useEffect(() => {
  //   const getCourseDetails = async () => {
  //     let res = await axios.get(`${BASE_URL}/${gameId}/${courseId}`);
  //     setRideDetails(res.data);
  //     setSelectedRide(true);
  //   };
  //   getRideDetails();
  // }, [rideId]);


  return (
    <div>
      <h2>Game Info Here</h2>



    </div>
  )
}

export default GameInfo