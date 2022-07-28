import { useEffect, useState } from 'react'
import axios from 'axios'
import InputCourse from '../components/InputCourse'
const BASE_URL = 'http://localhost:3001'

const HistoricalGame = (props) => {
  const [listCourse, setListCourse] = useState()
  const [isSubmit, setIsSubmit] = useState(false)
let showDetails

if(isSubmit){
  
}

  const postCourse = async (event) => {
      event.preventDefault()
      await axios.post(`${BASE_URL}/newcourse`, 
        newCourse
      )
      setIsSubmit(true)
    }

      return (
        <div className="newGameDetails">
          <div >
            <h2>Input Course Information</h2>
          </div>
          <DeleteCourse onSubmit={postCourse}/>
          {showDetails}
        </div>
      )
  }

  export default HistoricalGame