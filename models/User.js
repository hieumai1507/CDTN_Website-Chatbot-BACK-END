const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  typeAdmin: {
    type: String,
    default: "none",
    enum: ["none", "staff", "manager", "director"],
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
