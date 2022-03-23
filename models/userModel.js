const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  hobbies: [String],
  adress: {
    street: String,
    city: String,
  },
});

module.exports = mongoose.model("user", userSchema);
