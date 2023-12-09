import express from 'express'
import { currentUser } from '@cs_labs_gamehub/common'
import { login, logout, getCurrentUser } from '../controllers/auth-controller'

const router = express.Router()

router.post('/login', login)
router.post('/logout', logout)
router.get('/current-user', currentUser, getCurrentUser)

export default router
