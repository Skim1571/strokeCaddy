import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <div className='logo'>
        <img src='http://www.golfbytourmiss.com/gbtm/wp-content/uploads/2020/04/1200px-PGA_Tour_logo.svg_.png' alt='pga logo' />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </header>
  )
}

export default Header
