import mongoose from 'mongoose'

const courseShema = new mongoose.Schema({
  title: String,
  description: String,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
})

const Course = mongoose.model('Course', courseShema)

export default Course
