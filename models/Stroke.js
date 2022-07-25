const { Schema } = require('mongoose');

const strokeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'Users' },
    holeNum: { type: Number},
    clubUsed: { type: String}
  },
  { timestamps: true }
);

module.exports = strokeSchema;
