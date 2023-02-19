import { type Express } from 'express'

import { corsMiddleware } from '@main/middlewares/cors.middleware'

const setupMiddlewares = (app: Express): void => {
  app.use(corsMiddleware)
}

export { setupMiddlewares }
