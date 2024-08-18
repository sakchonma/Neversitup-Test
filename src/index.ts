import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import MongooseController from './config/mongodb'
import {
  logger,
} from './utils/logger'
const PORT = process.env.PORT || 8089
const app = express()

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

const mongooseController = new MongooseController(app)

mongooseController.connect(async (err: any, result: any) => {
  if (err) throw err.message

  try {
    const db = result.db

    db.connection.on('connected', () => logger("Server api connected to MongoDB !", "MONGODB"))

    db.connection.on('error', (err: any) => {
      logger(err)
    })
    db.connection.on('disconnected', () => logger("Server api disconnected from MongoDB !", "MONGODB"))

    app.use('/api', routes)
    app.use(errorHandler)
    const server = app.listen(PORT, async () => {
      console.log("Server api is ready on!!")
    })

  } catch (error) {
    console.log(error)
    logger(error)
  }
})