const makeAddApplicant = require('./add-applicant')
const makeListApplicants = require('./list-applicants')
const makeListApplicant = require('./list-applicant')
const applicantsDb = require('../data-access')

const addApplicant = makeAddApplicant({ applicantsDb })
const listApplicants = makeListApplicants({ applicantsDb })
const listApplicant = makeListApplicants({ applicantsDb })

const applicantService = Object.freeze(
  {
    addApplicant,
    listApplicants,
    listApplicant
  }
)

module.exports = applicantService
module.exports = { addApplicant, listApplicants, listApplicant }