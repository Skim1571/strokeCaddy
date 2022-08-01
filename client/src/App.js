import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About';
import NewCourse from './pages/NewCourse'
import CourseDetails from './pages/CourseDetails'
import AllCourses from './pages/AllCourses'
const BASE_URL = (process.env.PORT !== 3001) ? process.env.PORT : 'http://localhost:3001'

function App() {
  return (
    <div>
            <Header />
      <main>
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/about/' element={<About />} />
        <Route path='newcourse' element={<NewCourse BASE_URL={BASE_URL} />} />
        <Route path='/allcourses' element={<AllCourses  BASE_URL={BASE_URL}/> } />
        <Route path='/course/details/:courseId' element={<CourseDetails  BASE_URL={BASE_URL}/> } />
      </Routes>
      </main>
    </div>
  );
}

export default App;