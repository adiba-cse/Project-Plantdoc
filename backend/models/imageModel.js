const { Schema, model, Types } = require("../connection");

const userSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'user' },
  file: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});



module.exports = model("images", userSchema);
