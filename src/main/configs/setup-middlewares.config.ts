import { type Express } from 'express'

import { bodyParserMiddleware } from '@main/middlewares/body-parser.middleware'
import { corsMiddleware } from '@main/middlewares/cors.middleware'

const setupMiddlewares = (app: Express): void => {
  app.use(corsMiddleware)
  app.use(bodyParserMiddleware)
}

export { setupMiddlewares }
