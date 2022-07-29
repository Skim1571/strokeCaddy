const { model } = require('mongoose');
const CourseSchema = require('./Course')
const ParSchema = require('./Par')

const Course = model('Course', CourseSchema);
const Par = model('Par', ParSchema);

module.exports = {
  Course,
  Par
};