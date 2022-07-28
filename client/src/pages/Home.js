import { Link } from 'react-router-dom'

const Home = () => {
  const BASE_URL = 'http://localhost:3001'

  return (
    <div>
      <div className="home">
        <h2 className="title">Stroke Caddy</h2>
        <ul>
          <li>
          <Link to="newcourse">Create a New Course</Link>
          </li>
          <li>
          <Link to="newgame">Start a New Round</Link>
          </li>
          <li>
          <Link to="historicalgames">Historical Games</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
