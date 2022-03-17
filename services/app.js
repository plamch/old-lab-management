import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import { indexRouter } from './routes'
import { usersRouter } from './routes/users'

export const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)
