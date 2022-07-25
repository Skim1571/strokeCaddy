const { Schema } = require('mongoose');

const Users = new Schema(
  {
    name: { type: String, required: true },
    },
  { timestamps: true }
);

module.exports = Users;