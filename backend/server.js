import express from 'express'
import dotenv from 'dotenv'


import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()


const port = process.env.PORT || 5000

const app = express()

// allows us to parse raw json
app.use(express.json())
// allows us to send form data
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is ready'))

// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. 
// It is mostly used to set up middleware for your application.
// app.use(path, callback) 

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
