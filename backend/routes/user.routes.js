const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const router = express.Router();

router.get("/", async (req, res) => {
	const data = await userModel.find();

	if (data.length < 1) {
		res.status(200).send({ mes: "No user exixt." });
	} else {
		res.status(200).send({ data });
	}
});
router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userModel.findOne({ email });
		if (user) {
			bcrypt.compare(password, user.password, (error, result) => {
				if (result) {
					let token = jwt.sign({ userID: user._id }, "studyBuddy");
					res
						.status(200)
						.json({ msg: "user logged in Sucessfully", token, user });
				} else {
					res.status(200).json({ msg: "Incorrect Password" });
				}
			});
		} else {
			res.status(200).json({ msg: "User not found with the email." });
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});
router.post("/register", async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const existingUser = await userModel.findOne({ email });
		if (existingUser) {
			res.status(200).send({
				msg: "User is already exist with this email or name. Try unique email.",
			});
		} else {
			bcrypt.hash(password, 10, async (error, hash) => {
				if (hash) {
					const newUser = new userModel({
						name,
						email,
						password: hash,
					});
					await newUser.save();
					res.status(200).json({ msg: "user register sucessFully", newUser });
				}
			});
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});
router.delete("/delete-account", async (req, res) => {
	try {
		const { id } = req.body;
		const user = await userModel.findByIdAndDelete(id);
		if (!user) {
			res.status(200).send({ msg: "User not found" });
		} else {
			res.status(200).send({ msg: "User deleted successfully" });
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = router;
