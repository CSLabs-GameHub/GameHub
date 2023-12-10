import mongoose from 'mongoose'
import { app } from './app'

const PORT = process.env.PORT || 3000

const start = async () => {
  console.log('💥 Starting up...')
  if (!process.env.JWT_KEY) throw new Error('JWT_KEY must be defined')
  if (!process.env.JWT_LIFETIME) throw new Error('JWT_LIFETIME must be defined')
  if (!process.env.AUTH_MONGO_URI) throw new Error('MONGO_URI must be defined')

  try {
    await mongoose.connect(process.env.AUTH_MONGO_URI, {})
    console.log('🍃 Connected to MongoDb 🍃')
  } catch (err) {
    console.error(err)
  }

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

start()
