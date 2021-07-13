import {
  createConnection,
  getConnection,
  Connection as ConnectionTypeorm,
} from 'typeorm'

// Entities

import { Author } from '../components/author'

class Connection {
  create = async (): Promise<void> => {
    await createConnection({
      type: 'sqlite',
      database: '../database/db.sql',
      synchronize: true, // somente em ambiente de teste
      entities: [Author],
    })
  }

  truncateTestDatabase = async (): Promise<void> => {
    const connection: ConnectionTypeorm = getConnection()
    const entities = connection.entityMetadatas

    for (const entity of entities) {
      const repository = getConnection().getRepository(entity.name)
      await repository.query('PRAGMA foreign_keys = OFF;')
      await repository.query(`Delete from ${entity.tableName}`)
      await repository.query(
        `UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='${entity.tableName}'`
      )
      await repository.query('PRAGMA foreign_keys = ON;')
    }
  }
}

export default Connection
