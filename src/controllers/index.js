const { addApplicant } = require('../use-cases')
const makePostApplicant = require('./post-applicant')
const notFound = require('./not-found')

const postApplicant = makePostApplicant({ addApplicant })

const applicantController = Object.freeze({
  notFound,
  postApplicant
})

module.exports = applicantController
module.exports = { notFound, postApplicant }