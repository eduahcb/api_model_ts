import Joi from 'joi'
import { Request, Response, NextFunction } from 'express'

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      description: Joi.string().max(400),
    })

    await schema.validateAsync(req.body)
    next()
  } catch (error) {
    return res.status(400).json(error)
  }
}
