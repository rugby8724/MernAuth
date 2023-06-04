import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  // we can do this because we have the cookie parser
  token = req.cookies.jwt

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // we can do this because when we generate a token we passed it the userId
      // we use -password to make sure the password is not passed into the cookie
      req.user = await User.findById(decoded.userId).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export { protect }