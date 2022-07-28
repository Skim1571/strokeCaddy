const { Schema } = require('mongoose');

const ParSchema = new Schema(
  {courseInfo: [{
    holeNum: { type: Number},
    parNum: {type: Number}}]
  },
  { timestamps: true }
);

module.exports = ParSchema;
