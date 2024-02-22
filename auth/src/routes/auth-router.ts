import express from 'express'
import { rateLimit } from 'express-rate-limit'
import { currentUser } from '@cs_labs_gamehub/common'
import {
  login,
  logout,
  updateCohort,
  updateNickname,
  revokeDiscordToken,
  getCurrentUser,
} from '../controllers/auth-controller'
import { requireAuth } from '@cs_labs_gamehub/common'

const cohortUpdateLimiter = rateLimit({
  windowMs: 1000 * 60 * 60 * 24,
  limit: 1,
})

const router = express.Router()

router.get('/login', login)
router.post('/logout', logout)
router.post('/revoke', revokeDiscordToken)
router.get('/current-user', currentUser, getCurrentUser)
// DEV:PROD
// router.use(cohortUpdateLimiter)
router.use(currentUser, requireAuth)
router.patch('/update-cohort', updateCohort)
router.patch('/update-nickname', updateNickname)

export default router
