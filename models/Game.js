const { Schema } = require('mongoose');

const gameSchema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course'},
    strokeId: { type: Schema.Types.ObjectId, ref:'Stroke'}
  },
  { timestamps: true }
);

module.exports = gameSchema;
