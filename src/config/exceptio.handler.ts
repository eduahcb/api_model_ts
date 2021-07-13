import { Request, Response } from 'express'

export default function exceptionHandler(
  err: unknown,
  req: Request,
  res: Response
): void {
  if (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
