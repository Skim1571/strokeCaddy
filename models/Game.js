const { Schema } = require('mongoose');

const gameSchema = new Schema(
  {
    // userId: { type: Schema.Types.ObjectId, ref: 'Users' },
    courseId: { type: Schema.Types.ObjectId, ref: 'course'},
    strokes: [{type: Schema.Types.ObjectId, ref:'Stroke'}]
  },
  { timestamps: true }
);

module.exports = gameSchema;
