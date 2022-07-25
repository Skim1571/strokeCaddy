const { model } = require('mongoose');
const GameSchema = require('./Game');
const StrokeSchema = require('./Stroke');
const UserSchema = require('./User');

const Game = model('Game', GameSchema);
const Stroke = model('Stroke', StrokeSchema);
const Users = model('Users', UserSchema);

module.exports = {
  Game,
  Stroke,
  Users
};