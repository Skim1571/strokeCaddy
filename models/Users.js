const { Schema } = require('mongoose');

const Users = new Schema(
  {
    name: { type: String, required: true },
    gameId: [{ type: Schema.Types.ObjectId,ref:'Game' }]
    },
  { timestamps: true }
);

module.exports = Users;