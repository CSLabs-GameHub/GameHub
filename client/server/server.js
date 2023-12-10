import express from 'express'
import 'express-async-errors'
import { NotFoundError, errorHandler } from '@cs_labs_gamehub/common'

const app = express()

app.use(express.static('../build'))

// eslint-disable-next-line
app.use('*', (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

const start = () => {
  app.listen(3000, () => {
    console.log('💥 Client server listening on port 3000')
  })
}

start()
