import { Link } from 'react-router-dom'

const Home = () => {
  const BASE_URL = 'http://localhost:3001'

  return (
    <div>
      <div className="categories">
        <h2 className="title">Stroke Caddy</h2>
        <ul>
          <li>
          <Link to="newgame">New Game</Link>
          </li>
          <li>
          <Link to="historical">Historical Games</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
