import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NewCourse from './pages/NewCourse'
import NewGame from './pages/NewCourse'
import Game from './pages/NewGame'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='newcourse' element={<NewCourse />} />
        <Route path='newgame' element={<NewGame />} />
        <Route path='games/:id' element={<Game /> } />
      </Routes>
    </div>
  );
}

export default App;
