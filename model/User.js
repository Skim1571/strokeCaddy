const { Schema } = require('mongoose');

const Users = new Schema(
  {
    name: { type: String, required: false },
    gameId: { type: Array, required: false }
    },
  { timestamps: true }
);

module.exports = Users;