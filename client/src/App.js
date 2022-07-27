import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NewCourse from './pages/NewCourse'
import NewGame from './pages/NewGame'
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='newcourse' element={<NewCourse />} />
        <Route path='newgame' element={<NewGame />} />
        <Route path='/:gameId/:courseId' element={<Game /> } />
      </Routes>
    </div>
  );
}

export default App;