import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <div className='logo'>
        <img src='https://static.vecteezy.com/system/resources/previews/000/425/552/original/golf-icon-vector-illustration.jpg' alt='pga logo' />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </header>
  )
}

export default Header
