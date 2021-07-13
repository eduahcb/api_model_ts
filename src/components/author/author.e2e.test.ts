import request from 'supertest'
import express from 'express'

import App from '../../app'
import Connection from '../../config/connection'

describe('POST /author', () => {
  let app: express.Application
  let connection: Connection

  beforeAll(async (): Promise<void> => {
    connection = new Connection()

    await connection.create()
    app = new App().init()
  })

  beforeEach(async (): Promise<void> => {
    connection = new Connection()
    await connection.truncateTestDatabase()
  })

  test('should create a new author', async () => {
    const result = await request(app).post('/author').send({
      name: 'Eduardo',
      email: 'test@test.com',
      description: 'test',
    })

    expect(result.statusCode).toBe(201)
    expect(result.body).toHaveProperty('name', 'Eduardo')
    expect(result.body).toHaveProperty('email', 'test@test.com')
    expect(result.body).toHaveProperty('description', 'test')
    expect(result.body).toHaveProperty('id', 1)
  })

  test('should return a bad request', async () => {
    const result = await request(app).post('/author').send({})

    expect(result.statusCode).toBe(400)
  })
})
