import axios from 'axios'
import { DISCORD_API_ROUTES, DiscordServer, DiscordUserResponse } from '../types/discord-types'
import { BadRequestError } from '@cs_labs_gamehub/common'

export const getDiscordUser = async (accessToken: string) => {
  try {
    const { data: user } = await axios.get<DiscordUserResponse>(DISCORD_API_ROUTES.GET_USER, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const { data: userServers } = await axios.get<DiscordServer[]>(DISCORD_API_ROUTES.GET_SERVERS, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return { user, userServers }
  } catch (err) {
    throw new BadRequestError('Discord authentication failed')
  }
}
