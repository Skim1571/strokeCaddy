const { Game, Course, Stroke, Users } = require('../models');

// GET one course
const getSpecificCourse = async (req, res) => {
  try {
  const { courseId } = req.params;
  const specificCourse = await Course.findById(courseId);
  if (!specificCourse) throw Error('Course not found!');
  res.json(specificCourse);
} catch (e) {
  console.log(e);
  res.send('Specific Course not found!');
  }}

  // GET all courses
  const getAllCourses = async (req, res) => {
    try{
      const course = await Course.find({});
      res.json(course);
    } catch (e) {
      console.log(e);
      res.send('Courses not found!')
    }
  }

// GET strokes
const getStrokes = async (req, res) => {
try{
  const strokes = await Stroke.findById(gameId);
  if (!strokes) throw Error('Strokes not found!');
  res.json(strokes);
} catch (e) {
  console.log(e);
  res.send('Specific Strokes not found!');
  }
}

  // POST create new course
const createCourseDetails = async (req, res) => {
  const newCourse = await Course.create(req.body)
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
  getSpecificCourse,
  createCourseDetails,
  createGame,
  createStroke,
  updateStroke,
  deleteStroke,
  getStrokes,
  getAllGames

}