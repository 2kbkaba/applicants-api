const makeAddApplicant = require('./add-applicant')
const makeListApplicants = require('./list-applicants')
const makeListApplicant = require('./list-applicant')
const makeEditApplicant = require('./edit-applicant')
const applicantsDb = require('../data-access')

const addApplicant = makeAddApplicant({ applicantsDb })
const listApplicants = makeListApplicants({ applicantsDb })
const listApplicant = makeListApplicant({ applicantsDb })
const editApplicant = makeEditApplicant({ applicantsDb })

const applicantService = Object.freeze(
  {
    addApplicant,
    listApplicants,
    listApplicant,
    editApplicant
  }
)

module.exports = applicantService
module.exports = { addApplicant, listApplicants, listApplicant, editApplicant }