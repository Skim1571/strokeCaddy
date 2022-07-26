import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NewGame from './pages/Newgame'
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='newgame' element={<NewGame />} />
        <Route path='game/:id' element={<Game /> } />
      </Routes>
    </div>
  );
}

export default App;
