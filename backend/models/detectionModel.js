const { Schema, model, Types } = require("../connection");

const userSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'user' },
  image: { type: Types.ObjectId, ref: 'images' },
  treatment: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});



module.exports = model("detections", userSchema);
