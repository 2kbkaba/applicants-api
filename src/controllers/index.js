const { addApplicant, listApplicants } = require('../use-cases')
const makePostApplicant = require('./post-applicant')
const makeGetApplicants = require('./get-applicants')
const notFound = require('./not-found')

const postApplicant = makePostApplicant({ addApplicant })
const getApplicants = makeGetApplicants({ listApplicants })

const applicantController = Object.freeze({
  notFound,
  postApplicant,
  getApplicants
})

module.exports = applicantController
module.exports = { notFound, postApplicant, getApplicants }