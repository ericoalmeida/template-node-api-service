import dotenv from 'dotenv'

import { defaultEnvVariables } from './default.env.variables'

dotenv.config()

const nodeEnv = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : defaultEnvVariables.nodeEnv
const port = process.env.PORT !== undefined ? Number(process.env.PORT) : defaultEnvVariables.port

const appEnvVariables = {
  nodeEnv,
  port
}

export { appEnvVariables }
