const { Schema } = require('mongoose');

const strokeSchema = new Schema(
  {
    gameId: {type: String, required: true},
    holeNum: { type: Number},
    clubUsed: { type: String}
  },
  { timestamps: true }
);

module.exports = strokeSchema;
