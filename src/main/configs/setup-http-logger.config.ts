import { type Express } from 'express'
import pino from 'pino'
import pinoHttp from 'pino-http'

const setupHttpLogger = (app: Express): void => {
  const logger = pino({
    transport: {
      target: 'pino-pretty',
      options: { colorize: true }
    }
  })
  const httpLogger = pinoHttp({ logger })

  app.use(httpLogger)
}

export { setupHttpLogger }
