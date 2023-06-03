import asyncHandler from "express-async-handler"

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
  res.status(200).json({message: 'Register User'})
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