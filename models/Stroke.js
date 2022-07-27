const { Schema } = require('mongoose');

const strokeSchema = new Schema(
  {
    gameId: {type: String, required: true},
    stroke: { type: Array}
  },
  { timestamps: true }
);

module.exports = strokeSchema;
