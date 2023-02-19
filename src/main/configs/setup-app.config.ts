import express, { type Express } from 'express'

const setupApp = (): Express => {
  const app = express()

  return app
}

export { setupApp }
