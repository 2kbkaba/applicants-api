function makeListApplicant ({ applicantsDb }) {
  return async function listApplicant ({ applicantId } = {}) {
    if (!applicantId) {
      throw new Error('You must supply an applicant id.')
    }
    const applicant = await applicantsDb.findById({ applicantId })
    if (!applicant) {
      throw new Error('Could not found applicant with id: ' + applicantId)
    }
    return applicant
  }
}

module.exports = makeListApplicant