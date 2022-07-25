const { Schema } = require('mongoose');

const strokeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    gameId: { type: Schema.Types.ObjectId, ref: 'Game' },
    strokeCount: { type: Array}
  },
  { timestamps: true }
);

module.exports = strokeSchema;
