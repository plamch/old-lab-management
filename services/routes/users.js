import { Router } from 'express'

export const usersRouter = Router()

/* GET users listing. */
usersRouter.get('/', (_req, res) => {
    res.send('respond with a resource')
})
