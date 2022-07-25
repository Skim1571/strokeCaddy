const { Schema } = require('mongoose');

const gameSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    strokeId: { type: Schema.Types.ObjectId, ref:'Stroke'}
  },
  { timestamps: true }
);

module.exports = gameSchema;
