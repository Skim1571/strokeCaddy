const { Schema } = require('mongoose');

const Course = new Schema(
  {
    courseName: {type: String, required: true },
    coursePar: { type: Schema.Types.ObjectId, ref:'Par', required: true}
    },
  { timestamps: true }
);

module.exports = Course;