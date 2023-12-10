import { Request, Response } from 'express'
import mongoose from 'mongoose'
import axios from 'axios'
import { BadRequestError } from '@cs_labs_gamehub/common'
import { getDiscordUser } from '../utils/get-discord-user'
import { checkAcceptedServers } from '../utils/check-accepted-servers'
import { User } from '../models/user'
import { attachCookie } from '../utils/attach-cookie'

export const login = async (req: Request, res: Response) => {
  console.log('💥 Login')
  const { code } = req.query
  console.log(code)

  if (!code) {
    throw new BadRequestError('Something went wrong')
  }
  const response = await axios.post(
    'https://discord.com/api/v10/oauth2/token',
    {
      client_id: process.env.DISCORD_OAUTH_CLIENT,
      client_secret: process.env.DISCORD_OAUTH_SECRET,
      grant_type: 'authorization_code',
      code,
      // DEV:PROD
      redirect_uri: 'http://gamehub.dev/api/v1/users/login',
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
  if (!response || !response.data) {
    throw new BadRequestError('Something went wrong')
  }
  const { access_token, refresh_token } = response.data

  const { user, userServers } = await getDiscordUser(access_token)
  console.log('Discord User:', user)
  console.log('Discord Servers:', userServers)

  const belongsToAcceptedServer = checkAcceptedServers(userServers)
  if (!belongsToAcceptedServer) {
    // console.log("❌ You don't belong here")
    return res.redirect('http://gamehub.dev/forbidden')
    // throw new BadRequestError('You do not belong to an accepted server')
  }
  const existingUser = await User.findOne({ discordName: user.username })

  if (existingUser) {
    // console.log('💥 Found existing user')
    attachCookie(req, existingUser.id)
    // DEV:PROD
    return res.status(200).redirect('http://gamehub.dev/')
  }

  const newUser = User.build({
    username: user.username,
    discordName: user.username,
    discordId: user.id,
    discriminator: user.discriminator,
    avatar: user.avatar || '',
    accessToken: access_token,
    refreshToken: refresh_token,
  })
  await newUser.save()

  attachCookie(req, newUser.id)

  res.status(200).redirect('http://gamehub.dev/')

  res.send({ msg: '💥 Login' })
}

export const logout = (req: Request, res: Response) => {
  console.log('💥 Logout')

  res.send({ msg: '💥 Logout' })
}

export const revokeDiscordToken = (req: Request, res: Response) => {
  console.log('💥 Revoke Discord Token')

  res.send({ msg: '💥 💥 Revoke Discord Token' })
}

export const getCurrentUser = (req: Request, res: Response) => {
  console.log('💥 Get Current User')

  res.send({ msg: '💥 Get Current User' })
}
