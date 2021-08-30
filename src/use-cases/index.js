const makeAddApplicant = require('./add-applicant')
const applicantsDb = require('../data-access')

const addApplicant = makeAddApplicant({ applicantsDb })

const applicantService = Object.freeze(
  {
    addApplicant,
  }
)

export default applicantService
export { addApplicant }