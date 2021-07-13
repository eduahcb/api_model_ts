import { Request, Response } from 'express'
import { getRepository, Repository } from 'typeorm'

import Author from './author.entity'
import AuthorRequest from './author.request'

class AuthorController {
  private authorRepository: Repository<Author>

  constructor() {
    this.authorRepository = getRepository(Author)
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const authorRequest = new AuthorRequest(req.body)
    const newAuthor = authorRequest.toModel()

    const author = await this.authorRepository.save(newAuthor)

    res.status(201).json(author)
  }
}

export default AuthorController
