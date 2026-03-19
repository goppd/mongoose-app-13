import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const dbURI = process.env.MONGO_URI || 'URI'
const port = process.env.PORT || 3333
const host = process.env.HOST || 'http://localhost'

mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Successfully conncted to MongoDB!')
  })
  .catch((error) => {
    console.log('Failed to connct to MongoDB', error)
  })
app.listen(port, () => {
  console.log(`Server is running on ${host}:${port}`)
})
