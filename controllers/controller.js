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
    const course = await Course.find({});
    res.json(course);
  }

  // POST create new course
const createCourseDetails = async (req, res) => {
  const newCourse = await Course.create(req.body)
  const newGame = await Game.create()
  res.json(newCourse)
}

// PUT update an existing course


module.exports = {
  getCourse,
  getSpecificCourse,
  createCourseDetails

}