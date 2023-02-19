import { setupApp } from './configs/setup-app.config'

const start = (): void => {
  const app = setupApp()

  app.listen(7000, () => {
    console.log('🚀 Server started at http://localhost:7000')
  })
}

start()
