const makeAddApplicant = require('./add-applicant')
const makeListApplicants = require('./list-applicants')
const applicantsDb = require('../data-access')

const addApplicant = makeAddApplicant({ applicantsDb })
const listApplicants = makeListApplicants({ applicantsDb })

const applicantService = Object.freeze(
  {
    addApplicant,
    listApplicants
  }
)

module.exports = applicantService
module.exports = { addApplicant, listApplicants }