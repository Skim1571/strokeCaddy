const { Game, Course, Stroke, Users } = require('../models');



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

  const getCourse = async (req, res) => {
    const course = await Course.find({});
    res.json(course);
  }
  
const createCourseDetails = async (req, res) => {
  const newCourse = await Course.create(req.body)
  res.json(newCourse)
}


module.exports = {
  getCourse,
  getSpecificCourse,
  createCourseDetails

}