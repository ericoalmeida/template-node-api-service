import { constantsEnvVariables } from '@main/env-variables/constants.env-variables'

class ApplicationEnvVariables {
  private static instance: ApplicationEnvVariables

  private constructor () { }

  public static get current (): ApplicationEnvVariables {
    if (ApplicationEnvVariables.instance === undefined) {
      ApplicationEnvVariables.instance = new ApplicationEnvVariables()
    }

    return this.instance
  }

  public get nodeEnv (): string {
    const { environment } = constantsEnvVariables

    return process.env.NODE_ENV !== undefined
      ? process.env.NODE_ENV
      : environment.development
  }

  public get port (): number {
    const defaultPort = 7000

    return process.env.PORT !== undefined
      ? Number(process.env.PORT)
      : defaultPort
  }
}

export default ApplicationEnvVariables
