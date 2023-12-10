import express from 'express'
import { currentUser } from '@cs_labs_gamehub/common'
import { login, logout, getCurrentUser, revokeDiscordToken } from '../controllers/auth-controller'

const router = express.Router()

router.get('/login', login)
router.post('/logout', logout)
router.post('/revoke', revokeDiscordToken)
router.get('/current-user', currentUser, getCurrentUser)

export default router
