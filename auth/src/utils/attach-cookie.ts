import { Request } from 'express'
import jwt from 'jsonwebtoken'

export const attachCookie = (req: Request, userId: string) => {
  const userJwt = jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_KEY!,
    {
      expiresIn: process.env.JWT_LIFETIME,
    },
  )

  req.session = {
    jwt: userJwt,
  }
}
