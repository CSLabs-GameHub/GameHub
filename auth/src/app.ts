import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import authRouter from './routes/auth-router'
import { errorHandler, NotFoundError } from '@cs_labs_gamehub/common'

const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: false,
  }),
)

app.use('/api/v1/users', authRouter)

app.all('*', async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
