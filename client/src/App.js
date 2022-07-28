import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NewCourse from './pages/NewCourse'
import NewGame from './pages/NewGame'
import Game from './pages/Game'
import { useState } from 'react'
import AllCourses from './pages/AllCourses'

function App() {
  const [gameData, setGameData ] = useState()

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='newcourse' element={<NewCourse />} />
        <Route path='/allcourses' element={<AllCourses /> } />
        <Route path='newgame' element={<NewGame />} />
        <Route path='/course/details/:courseId' element={<Game /> } />
      </Routes>
    </div>
  );
}

export default App;