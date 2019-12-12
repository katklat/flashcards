import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import cardsRoute from './routes/cards'
const server = express()

const { DB_NAME } = process.env

mongoose.connect('mongodb://localhost:27017/' + DB_NAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
})

server.listen(3333, () => console.log('Server ready on port 3333'))
server.use(express.json())
server.use(cors())
server.set('json spaces', 2)

server.use('/cards', cardsRoute)
