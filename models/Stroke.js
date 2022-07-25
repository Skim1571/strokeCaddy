const { Schema } = require('mongoose');

const strokeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'Users' },
    gameId: { type: Schema.Types.ObjectId, ref: 'Game'},
    holeNum: { type: Number},
    clubUsed: { type: String}
  },
  { timestamps: true }
);

module.exports = strokeSchema;
