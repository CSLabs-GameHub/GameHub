import { Request, Response } from 'express'
import mongoose from 'mongoose'

export const login = (req: Request, res: Response) => {
  console.log('💥 Login')

  res.send({ msg: '💥 Login' })
}

export const logout = (req: Request, res: Response) => {
  console.log('💥 Logout')

  res.send({ msg: '💥 Logout' })
}

export const getCurrentUser = (req: Request, res: Response) => {
  console.log('💥 Get Current User')

  res.send({ msg: '💥 Get Current User' })
}
