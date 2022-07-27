const { Schema } = require('mongoose');

const strokeSchema = new Schema(
  {
    holeNum: { type: Number},
    clubUsed: {type: String}
  },
  { timestamps: true }
);

module.exports = strokeSchema;
