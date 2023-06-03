// the default middleware for express is an html page, we want to send back json since we are using an api and stack trace if we are in dev

// throws error if user goes to a unknown url
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

// if you pass in error as the first param express knows this is your custom error middlewar
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message

  // mongoose has uniuqe error called CastError, this checks if a request to the database with an objectId that does not exist
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    // 404 == not found
    statusCode = 404
    message = 'Resource not found'
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

export {
  notFound,
  errorHandler
}

