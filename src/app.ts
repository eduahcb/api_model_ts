import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import router from './routes'
import exceptionHandler from './config/exceptio.handler'

class App {
  private server: express.Application

  constructor() {
    this.server = express()
  }

  private middlewares(): void {
    this.server.use(express.json())
    this.server.use(helmet())
    this.server.use(cors())
  }

  private routes(): void {
    this.server.use(router())
  }

  private exceptionHandler(): void {
    this.server.use(exceptionHandler)
  }

  init(): express.Application {
    this.middlewares()
    this.routes()
    this.exceptionHandler()
    return this.server
  }
}

export default App
