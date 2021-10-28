import express from 'express'
import next from 'next'

import './config'
import graphqlServer from './graphqlServer'

import { graphqlUploadExpress } from 'graphql-upload'
import { imageResizerMiddleware } from './middleware/imageResizer'
import { startMailer } from './modules/Mailer'
import { context } from './nexus/context'

const cwd = process.cwd()

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  if (process.env.Sendmail === 'true') {
    startMailer(context)
  }

  const server = express()

  server.use('/images/', imageResizerMiddleware)

  server.use(express.static(cwd + '/shared'))

  // server.use('/uploads', express.static('/'))

  server.use('/uploads', (req, res) => {
    res.sendFile(
      cwd + '/uploads/' + decodeURI(req.url),
      (error: Error & { status?: number; statusCode?: number }) => {
        if (error) {
          console.error('server /uploads', error)
          res.status(error.status || 404).end()
        }
      }
    )
  })

  /**
   * PWA and other public generated files
   */
  server.use(express.static(cwd + '/.next/public'))

  // server.use(
  //   '/api',
  //   graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  //   // graphqlHTTP({ schema })
  // )

  server.use(graphqlUploadExpress())

  /**
   * API requests
   */
  graphqlServer.applyMiddleware({
    app: server,
    path: '/api',
  })

  // Uncomment to serve storybook-static (before should run yarn build-storybook)
  // server.use('/storybook-static/', express.static('./storybook-static/'))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err?: Error) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.info(`> Ready on http://localhost:${port}`)
  })
})
