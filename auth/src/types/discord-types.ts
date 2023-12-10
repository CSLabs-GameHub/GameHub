export enum DISCORD_API_ROUTES {
  GET_TOKEN = 'https://discord.com/api/v10/oauth2/token',
  GET_USER = 'https://discord.com/api/v10/users/@me',
  GET_SERVERS = 'https://discord.com/api/v10/users/@me/guilds',
  REVOKE_TOKEN = 'https://discord.com/api/v10/oauth2/token/revoke',
}

export interface DiscordUserResponse {
  id: string
  username: string
  discriminator: string
  avatar: string | null
}

export interface DiscordServer {
  id: string
  name: string
  icon: string
}

export enum ACCEPTED_SERVERS {
  ECRI44 = '1165997893824561213',
  CRTI19ECRI43ECRI44 = '1172662083750473748',
}
