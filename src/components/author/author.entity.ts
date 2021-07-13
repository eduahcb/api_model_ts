import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

export interface AuthorInterface {
  name: string
  email: string
  description: string
}

@Entity({
  name: 'authors',
})
class Author {
  @PrimaryGeneratedColumn()
  private id: number | undefined

  @Column({
    nullable: false,
    type: 'varchar',
  })
  private email: string

  @Column({
    nullable: false,
    type: 'varchar',
  })
  private name: string

  @Column({
    type: 'varchar',
    length: 400,
  })
  private description: string

  constructor(name: string, email: string, description: string) {
    this.name = name
    this.email = email
    this.description = description
  }
}

export default Author
