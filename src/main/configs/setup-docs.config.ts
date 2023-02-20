import { type Express } from 'express'
import { serve, setup } from 'swagger-ui-express'

import { swaggerSpecificationDoc } from '@main/docs/swagger-specification.doc'
import { constantsEnvVariables } from '@main/env-variables/constants.env-variables'
import { serverEnvVariables } from '@main/env-variables/server.env-variables'

const apiDocsEndpoint = '/api-docs'

const runningInProductionEnvironment = (): boolean => {
  const { application } = serverEnvVariables
  const { environment } = constantsEnvVariables

  return application.nodeEnv === environment.production
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
