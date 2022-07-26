const { Game, Course, Stroke, Users } = require('../models');

// const getCats = (req, res) => {
//   res.send({ message: 'getting Cats' })
// }

// const findCat =( req, res) => {
//   res.send({message: `Found Cat with an id of ${req.params.catId}`})
// }

// const bothParams = (req, res) => {
//   res.send({message: `Getting ${req.params.catName}, a cat with an id of ${req.params.catId}`})
// }

// const getWow = (req, res) => {
//   res.send({message: `Wow, that's a very detailed path for no reason`})
// }

// const getCatDetails = (req, res) => {
//   res.send({message: `My cats name is ${req.query.catName}, he/she is ${req.query.catAge} years old`})
// }

const createCourseDetails = async (req, res) => {
  const newCourse = await Course.create(req.body)
  res.json(newCourse)
}


module.exports = {
  createCourseDetails,
}