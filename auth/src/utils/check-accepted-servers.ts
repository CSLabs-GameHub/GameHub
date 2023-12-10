import { ACCEPTED_SERVERS, DiscordServer } from '../types/discord-types'

export const checkAcceptedServers = (servers: DiscordServer[]) => {
  const belongsToAcceptedServer = servers.some(
    (server) =>
      server.id === ACCEPTED_SERVERS.ECRI44 ||
      server.id === ACCEPTED_SERVERS.CRTI19ECRI43ECRI44,
  )

  return belongsToAcceptedServer
}
