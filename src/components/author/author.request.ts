import Author, { AuthorInterface } from './author.entity'

class AuthorRequest {
  private name: string
  private email: string
  private description: string

  constructor({ name, email, description }: AuthorInterface) {
    this.name = name
    this.email = email
    this.description = description
  }

  toModel(): Author {
    return new Author(this.name, this.email, this.description)
  }
}

export default AuthorRequest
