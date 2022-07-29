const { Game, Course, Stroke, Users, Par } = require('../models');

// GET one course
const getCourseDetails = async (req, res) => {
  try {
  const { courseId } = req.params;
  const specificCourse = await Course.findById(courseId).populate('coursePar');
  if (!specificCourse) throw Error('Course not found!');
  res.json(specificCourse);
} catch (e) {
  console.log(e);
  res.send('Specific Course not found!');
  }}

  // GET all courses
  const getAllCourses = async (req, res) => {
    try{
      const course = await Course.find().populate('coursePar');
      res.json(course);
    } catch (e) {
      console.log(e);
      res.send('Courses not found!')
    }
  }

// DELETE selected course
const deleteCourse = async (req, res) => {
  try{
    const { courseId } = req.params
    const findPar = await Course.findById(courseId)
    const removePar = await Par.findByIdAndDelete(findPar.coursePar._id)
    const removeCourse = await Course.findByIdAndDelete(courseId)
    if (!removeCourse) throw Error('Specific course not found!');
    res.json(removeCourse)
  } catch (e) {
    console.log(e);
    res.send('Could not delete!')
  }
}

// PUT selected course
  const updateCourseDetails = async (req, res) => {
    try{
      const { courseId } = req.params
      console.log(req.body)
      const changePar = await Par.findByIdAndUpdate({_id: req.body._id}, {courseInfo: req.body.courseInfo}, { new: true} )
      if (!changePar) throw Error('Specific course not found!');
      res.json(changePar)
    } catch (e) {
      console.log(e);
      res.send('Could not update!')
    }
  }

  // POST create new course
const createCourseDetails = async (req, res) => {
  const newPar = await Par.create({courseInfo: req.body.courseInfo })
  console.log(newPar)
  const newCourse = await Course.create({courseName: req.body.courseName, courseScoreCardImage: req.body.courseScoreCardImage, coursePar: newPar._id})
  res.json(newCourse)
  }

  // POST create new game
  const createGame = async (req, res) => {
    const newGame = await Game.create(req.body)
    res.json(newGame)
  }

  // GET all games
    const getAllGames = async (req, res) => {
      try{
        const allGames = await Game.find({});
        res.json(allGames);
      } catch (e) {
        console.log(e);
        res.send('Games not found!')
      }
  }

module.exports = {
  getAllCourses,
  getCourseDetails,
  createCourseDetails,
  createGame,
  getAllGames,
  deleteCourse,
  updateCourseDetails
}