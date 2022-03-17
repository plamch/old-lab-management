import { Router } from 'express'

export const indexRouter = Router()

/* GET home page. */
indexRouter.get('/', (_req, res) => {
    res.send('Services home page')
})
