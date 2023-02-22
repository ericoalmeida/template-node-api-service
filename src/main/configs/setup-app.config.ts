import express, { type Express } from 'express'

import { setupDi } from '@main/configs/setup-di.config'
import { setupDocs } from '@main/configs/setup-docs.config'
import { setupHttpLogger } from '@main/configs/setup-http-logger.config'
import { setupMiddlewares } from '@main/configs/setup-middlewares.config'
import { setupRoutes } from '@main/configs/setup-routes.config'

const setupApp = (): Express => {
  const app = express()

  setupDi()
  setupDocs(app)
  setupMiddlewares(app)
  setupRoutes(app)
  setupHttpLogger(app)

  return app
}

export { setupApp }
