const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const { notFound, postApplicant } = require('./controllers')
const makeCallback = require('./express-callback')

const apiRoot = process.env.DM_BASE_URL
// console.log(makeCallback)
const app = express()
app.use(bodyParser.json())
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.post('/applicants', makeCallback(postApplicant))
app.use(makeCallback(notFound))

app.listen(3001, () => {
  console.log('Server is listening on port 3001')
})

module.exports = app