import { Router } from 'express'

import AuthorController from './author.controller'
import authorRequestValidation from './author.validator'

const router = (): Router => {
  const authorController = new AuthorController()

  const routes = Router()

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  routes.post('/', authorRequestValidation, authorController.create)

  return routes
}

export default router
