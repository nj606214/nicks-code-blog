const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

// Register new user
// POST /users
// Public

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, confirmPassword } = req.body

    if(!username || !email || !password || !confirmPassword) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if user exists
    const userExists = await User.findOne({username})

    if(userExists) {
        res.status(400)
        throw new Error ('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

// Authenticate user
// POST /users/login
// Public
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    
    //check for username
    const user = await User.findOne({username})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
        })
    } else {
    res.status(400)
    throw new Error('Invalid Credentials')
    }
    
    res.json({message: 'login User'})
})

// Get user data
// Get /users/me
// Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: ' User data display'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}