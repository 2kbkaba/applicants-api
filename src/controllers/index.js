const { addApplicant, listApplicants, listApplicant, editApplicant } = require('../use-cases')
const makePostApplicant = require('./post-applicant')
const makeGetApplicants = require('./get-applicants')
const makeGetApplicant = require('./get-applicant')
const makePutApplicant = require('./put-applicant')
const notFound = require('./not-found')

const postApplicant = makePostApplicant({ addApplicant })
const getApplicants = makeGetApplicants({ listApplicants })
const getApplicant = makeGetApplicant({ listApplicant })
const putApplicant = makePutApplicant({ editApplicant })

const applicantController = Object.freeze({
  notFound,
  postApplicant,
  getApplicants,
  getApplicant,
  putApplicant
})

module.exports = applicantController
module.exports = { notFound, postApplicant, getApplicants, getApplicant, putApplicant }