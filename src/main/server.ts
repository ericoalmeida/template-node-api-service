import 'module-alias/register'
import 'reflect-metadata'

import Logger from '@common/logs/logger'

import { setupApp } from '@main/configs/setup-app.config'
import { appEnvVariables } from '@main/env-variables/app.env-variables'

const start = (): void => {
  const app = setupApp()

  app.listen(appEnvVariables.port, () => {
    Logger.current.info(`🚀 Server started at http://localhost:${appEnvVariables.port}`)
  })
}

start()
