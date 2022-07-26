const { Game, Course, Stroke, Users } = require('../models');

const getCourse = (req, res) => {
  const course = await Course.find({});
  res.json(course);
}

const createCourseDetails = async (req, res) => {
  const newCourse = await Course.create(req.body)
  res.json(newCourse)
}


module.exports = {
  getCourse,
  createCourseDetails

}