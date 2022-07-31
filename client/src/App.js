import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About';
import NewCourse from './pages/NewCourse'
import CourseDetails from './pages/CourseDetails'
import AllCourses from './pages/AllCourses'

function App() {
  return (
    <div>
            <Header />
      <main>
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/about/' element={<About />} />
        <Route path='newcourse' element={<NewCourse />} />
        <Route path='/allcourses' element={<AllCourses /> } />
        <Route path='/course/details/:courseId' element={<CourseDetails /> } />
      </Routes>
      </main>
    </div>
  );
}

export default App;