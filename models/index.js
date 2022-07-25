const { model } = require('mongoose');
const GameSchema = require('./Game');
const StrokeSchema = require('./Stroke');
const UserSchema = require('./Users');
const CourseSchema = require('./Course')

const Game = model('Game', GameSchema);
const Stroke = model('Stroke', StrokeSchema);
const Users = model('Users', UserSchema);
const Course = model('Course', CourseSchema);

module.exports = {
  Game,
  Stroke,
  Users,
  Course
};