import 'module-alias'

import { setupApp } from './configs/setup-app.config'
import { appEnvVariables } from './env-variables/app.env.variables'

const start = (): void => {
  const app = setupApp()

  app.listen(appEnvVariables.port, () => {
    console.log(`🚀 Server started at http://localhost:${appEnvVariables.port}`)
  })
}

start()
