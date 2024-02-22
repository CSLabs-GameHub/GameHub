import path from 'path'
import express from 'express'
import { json } from 'body-parser'
import 'express-async-errors'
import cookieSession from 'cookie-session'
// DEV:PROD - NON-K8s DEV MODE
// import dotenv from 'dotenv'
// dotenv.config({ path: path.resolve(__dirname, '../.env') })

import authRouter from './routes/auth-router'
import { errorHandler, NotFoundError } from '@cs_labs_gamehub/common'

const app = express()
// DEV:PROD
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
