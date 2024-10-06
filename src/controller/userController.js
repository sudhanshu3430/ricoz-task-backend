const express = require('express');
const zod = require('zod');
const bcrypt = require('bcrypt');
const { User } = require('../db/index');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, BCRYPT_SALT_ROUNDS } = require('../../config');

const router = express.Router();

const signupBody = zod.object({ 
    username: zod.string().email(),
    password: zod.string().min(6), // Optional: ensure a minimum length for the password
});

router.post("/signup", async (req, res) => {
    const parseResult = signupBody.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: parseResult.error.errors,
        });
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
        return res.status(400).json({
            message: "Email already taken",
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS);
    const user = await User.create({ 
        username: req.body.username,
        password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: "User created successfully", token });
});

const signInBody = zod.object({ 
    username: zod.string().email(),
    password: zod.string().min(6), // Optional: ensure a minimum length for the password
});

router.post("/signin", async (req, res) => {
    const parseResult = signInBody.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: parseResult.error.errors,
        });
    }

    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error("Error during sign-in:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
