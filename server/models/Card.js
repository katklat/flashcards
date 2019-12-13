import mongoose from 'mongoose'

const Card = mongoose.model('Card', {
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  isBookmarked: Boolean,
  needsPractice: Boolean,
  tags: {
    type: [String],
    lowercase: true,
    required: true,
  },
})

export default Card
