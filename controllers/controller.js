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
    console.log(findPar.coursePar._id)
    const removePar = await Par.findByIdAndDelete(findPar.coursePar._id)
    console.log(removePar)
    const removeCourse = await Course.findByIdAndDelete(courseId)
    if (!removeCourse) throw Error('Specific course not found!');
    res.json(removeCourse)
  } catch (e) {
    console.log(e);
    res.send('Could not delete!')
  }
}

// GET strokes
// const getStrokes = async (req, res) => {
// try{
//   const strokes = await Stroke.findById(gameId);
//   if (!strokes) throw Error('Strokes not found!');
//   res.json(strokes);
// } catch (e) {
//   console.log(e);
//   res.send('Specific Strokes not found!');
//   }
// }



  // POST create new course
const createCourseDetails = async (req, res) => {
  const newPar = await Par.create({courseInfo: req.body.courseInfo })
  console.log(newPar)
  const newCourse = await Course.create({courseName: req.body.courseName, coursePar: newPar._id})
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

  // POST create stroke
  const createStroke = async (req, res) => {
    const newStroke = await Stroke.create({holeNum: req.body.holeNum,
    clubUsed: req.body.clubUsed})
    const foundGame = await Game.findById(req.body.gameId)
    console.log(foundGame)
    foundGame.strokes.push(newStroke._id)
    res.json(foundGame)
  }

// PUT update an existing stroke
const updateStroke = async (req, res) => {
  const updateStroke = await Stroke.updateOne(req.body)
  res.json(updateStroke)
}

//DELETE 
const deleteStroke = async (req, res) => {
  const removeStroke = await Stroke.deleteOne(req)
  res.json(removeStroke)
}

module.exports = {
  getAllCourses,
  getCourseDetails,
  createCourseDetails,
  createGame,
  getAllGames,
  deleteCourse

}