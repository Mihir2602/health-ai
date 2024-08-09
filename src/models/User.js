const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date },
  height: { type: Number },
  weight: { type: Number },
  allergies: { type: String },
  fitness: { type: String },
  diet: { type: String },
  smoking: { type: String },
  alcohol: { type: String },
  familyHistory: { type: String },
  medications: { type: String },
  country: { type: String },
  gender: { type: String },
  question: {type: String},
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
