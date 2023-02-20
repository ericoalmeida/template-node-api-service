import express, { type Express } from 'express'

import { setupDocs } from '@main/configs/setup-docs.config'
import { setupMiddlewares } from '@main/configs/setup-middlewares.config'
import { setupRoutes } from '@main/configs/setup-routes.config'

const setupApp = (): Express => {
  const app = express()

  setupDocs(app)
  setupMiddlewares(app)
  setupRoutes(app)

  return app
}

export { setupApp }
