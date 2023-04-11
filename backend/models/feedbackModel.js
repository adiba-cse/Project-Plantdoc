const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  user: { type: Types.ObjectId, ref: 'user' },
  feedback: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});



module.exports = model("detections", schema);
