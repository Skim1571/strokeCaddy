const { Schema } = require('mongoose');

const gameSchema = new Schema(
  {
    // userId: { type: Schema.Types.ObjectId, ref: 'Users' },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: false},
    strokes: [{type: Schema.Types.ObjectId, ref:'Stroke', required: false}]
  },
  { timestamps: true }
);

module.exports = gameSchema;
