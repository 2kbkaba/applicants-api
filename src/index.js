const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const { notFound, postApplicant, getApplicants, getApplicant, putApplicant } = require('./controllers')
const makeCallback = require('./express-callback')

const apiRoot = process.env.DM_BASE_URL
const app = express()
app.use(bodyParser.json())
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.post('/applicants', makeCallback(postApplicant))
app.get('/applicants', makeCallback(getApplicants))
app.get('/applicants/:applicantId', makeCallback(getApplicant))
app.put('/applicants/:applicantId', makeCallback(putApplicant))
app.use(makeCallback(notFound))

app.listen(3001, () => {
  console.log('Server is listening on port 3001')
})

module.exports = app