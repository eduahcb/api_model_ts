import { Router } from 'express'

import { authorRoutes } from './components/author'

const router = (): Router => {
  const routes = Router()

  routes.use('/author', authorRoutes())

  return routes
}

export default router
