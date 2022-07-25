const { Schema } = require('mongoose');

const Course = new Schema(
  {
    courseName: {type: String, required: true },
    coursePar: { type: Array, required: true},
    },
  { timestamps: true }
);

module.exports = Users;