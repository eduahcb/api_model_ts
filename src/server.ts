import App from './app'
import Connection from './config/connection'

const startServer = async (): Promise<void> => {
  const connection = new Connection()

  await connection.create()

  const app = new App().init()

  const port = 8080

  app.listen(port, () => {
    console.log(`server is running on port ${port}`)
  })
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startServer()
