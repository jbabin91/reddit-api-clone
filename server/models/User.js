import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 characters or more.']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be 5 characters or more.']
  }
})

// Write some encription for password

const User = mongoose.model('User', userSchema)

export default User
