const mongoose = require("mongoose");

// creating user schema;
const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

// creating model for user 
const User = mongoose.model("User", userSchema);
module.exports = User;
