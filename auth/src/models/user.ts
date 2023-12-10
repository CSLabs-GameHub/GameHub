import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

type Cohort = 'ECRI 43' | 'ECRI 44' | 'CTRI 19'

interface UserAttrs {
  username: string
  discordName: string
  discordId: string
  discriminator: string
  avatar: string
  cohort?: Cohort
  accessToken: string
  refreshToken: string
}

export interface UserDoc extends mongoose.Document {
  username: string
  discordName: string
  discordId: string
  discriminator: string
  avatar: string
  cohort?: Cohort
  accessToken: string
  refreshToken: string
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minLength: 2,
      required: true,
      unique: true,
    },
    discordName: {
      type: String,
      required: true,
    },
    discordId: {
      type: String,
      required: true,
    },
    discriminator: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    cohort: {
      type: String,
    },
    accessToken: {
      type: String,
      required: true,
      // unique: true
    },
    refreshToken: {
      type: String,
      required: true,
      // unique: true
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        delete ret.accessToken
        delete ret.refreshToken
      },
    },
  },
)

userSchema.pre('save', async function () {
  if (!this.isModified('accessToken')) return

  const salt = await bcrypt.genSalt(10)
  const hashedAccessToken = await bcrypt.hash(this.accessToken, salt)

  this.accessToken = hashedAccessToken
})
userSchema.pre('save', async function () {
  if (!this.isModified('refreshToken')) return

  const salt = await bcrypt.genSalt(10)
  const hashedRefreshToken = await bcrypt.hash(this.refreshToken, salt)

  this.refreshToken = hashedRefreshToken
})

userSchema.methods.compareTokens = async function (providedToken: string) {
  const tokensMatch = await bcrypt.compare(providedToken, this.password)
  return tokensMatch
}

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { User }
