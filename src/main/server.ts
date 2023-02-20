import 'module-alias/register'
import 'reflect-metadata'

import { setupApp } from '@main/configs/setup-app.config'
import { appEnvVariables } from '@main/env-variables/app.env-variables'

const start = (): void => {
  const app = setupApp()

  app.listen(appEnvVariables.port, () => {
    console.log(`🚀 Server started at http://localhost:${appEnvVariables.port}`)
  })
}

start()
