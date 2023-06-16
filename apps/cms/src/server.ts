import express from 'express'
import payload from 'payload'

require('dotenv').config()

const app = express()

app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  const port = parseInt(process.env.PORT ?? '3000')
  app.listen(port, () => {
    payload.logger.info(`Server running at http://localhost:${port}`)
  })
}

start()
