import { type Express } from 'express'
import { serve, setup } from 'swagger-ui-express'

import { swaggerSpecificationDoc } from '@main/docs/swagger-specification.doc'
import { appEnvVariables } from '@main/env-variables/app.env.variables'
import { constantsEnvVariables } from '@main/env-variables/constants.env.variable'

const apiDocsEndpoint = '/api-docs'

const runningInProductionEnvironment = (): boolean => {
  const { nodeEnv } = appEnvVariables
  const { environment } = constantsEnvVariables

  return nodeEnv === environment.production
}

const setupDocs = (app: Express): void => {
  if (runningInProductionEnvironment()) return

  app.use(
    apiDocsEndpoint,
    serve,
    setup(swaggerSpecificationDoc)
  )
}

export { setupDocs }
