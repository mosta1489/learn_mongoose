const mongoose = require("mongoose");

const adressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },

  age: {
    type: Number,
    min: 1,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    // default: new Date(),
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  hobbies: [String],
  adress: adressSchema,
});

module.exports = mongoose.model("user", userSchema);
