const { Game, Course, Stroke, Users } = require('../models');


// GET one course
const getSpecificCourse = async (req, res) => {
  try {
  const { id } = req.params;
  const specificCourse = await Course.findById(id);
  if (!specificCourse) throw Error('Course not found!');
  res.json(specificCourse);
} catch (e) {
  console.log(e);
  res.send('Specific Course not found!');
  }}

  // GET all course
  const getCourse = async (req, res) => {
    try{
      const course = await Course.find({});
      res.json(course);
    } catch (e) {
      console.log(e);
      res.send('Courses not found!')
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

  // POST create stroke
  const createStroke = async (req, res) => {
    const newStroke = await Stroke.create(req.body)
    res.json(newStroke)
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
  getCourse,
  getSpecificCourse,
  createCourseDetails,
  createGame,
  createStroke,
  updateStroke,
  deleteStroke

}