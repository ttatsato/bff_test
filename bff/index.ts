import Express from 'express'
import { Log } from '../types'
const app: Express.Express = Express()
app.use(Express.json())

module.exports = app

app.get('/v1/log', async (_: Express.Request, res: Express.Response) => {
  console.log('logger')
  const log: Log = {
    status: 'info',
    message: 'これはログ',
  }
  res.status(200).send(log)
})
