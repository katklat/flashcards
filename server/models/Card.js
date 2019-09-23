const mongoose = require('mongoose')

const Card = mongoose.model('Card', {
  title: String,
  question: String,
  answer: String,
})

module.exports = Card
