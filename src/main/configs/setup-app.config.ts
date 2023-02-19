import express, { type Express } from 'express'

import { setupMiddlewares } from '@main/configs/setup-middlewares.config'

const setupApp = (): Express => {
  const app = express()

  setupMiddlewares(app)

  return app
}

export { setupApp }
