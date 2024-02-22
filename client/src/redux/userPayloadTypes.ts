export interface LoginPayload {
  currentUser: {
    username: string
    avatar: string
    discordName: string
    discordId: string
    discriminator: string
    cohort?: string
  }
}
