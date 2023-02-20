import 'module-alias/register'
import 'reflect-metadata'

import Logger from '@common/logs/logger'

import { setupApp } from '@main/configs/setup-app.config'
import { serverEnvVariables } from '@main/env-variables/server.env-variables'

const start = (): void => {
  const app = setupApp()

  const { application } = serverEnvVariables

  app.listen(application.port, () => {
    Logger.current.info(`🚀 Server started at http://localhost:${application.port}`)
  })
}

start()
