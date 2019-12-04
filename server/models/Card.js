import mongoose from 'mongoose'

const Card = mongoose.model('Card', {
  title: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  isBookmarked: Boolean,
  tags: {
    type: [String],
    lowercase: true,
    required: true,
  },
})

export default Card
