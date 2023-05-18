import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/session', authenticate)

  app.patch('/token/refresh', refresh)

  /** Only Authenticated Users */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
