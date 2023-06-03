import asyncHandler from "express-async-handler"

import User from '../models/userModel.js'

// @ desc Auth user/set token
// POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Auth User'})
})

// @ desc Register new user
// POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  //req.body is the data sent in the http body
  const {name, email, password} = req.body
  
  const userExists = await User.findOne({email})

  if (userExists) {
    res.status(400)
    throw new Error('User already exist')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @ desc Logout user
// POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Logout User'})
})

// @ desc Get user profile
// GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'User profile'})
})

// @ desc Update user profile
// PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'update User profile'})
})



export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
}