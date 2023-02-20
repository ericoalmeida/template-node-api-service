import dotenv from 'dotenv'

import ApplicationEnvVariables from '@main/env-variables/application.env-variables'

dotenv.config()

const serverEnvVariables = {
  application: ApplicationEnvVariables.current
}

export { serverEnvVariables }
