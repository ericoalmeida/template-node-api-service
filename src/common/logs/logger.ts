import pino, { type BaseLogger } from 'pino'

class Logger {
  private static instance: Logger

  private readonly logger: BaseLogger

  private constructor () {
    this.logger = pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true
        }
      }
    })
  }

  public static get current (): Logger {
    if (Logger.instance === undefined) {
      Logger.instance = new Logger()
    }

    return Logger.instance
  }

  public info (message: string, data?: object): void {
    this.logger.info(data, message)
  }

  public error (message: string, error?: any): void {
    this.logger.error(error, message)
  }
}

export default Logger
