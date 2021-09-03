const makeApplicant = require('../applicant')
function makeEditApplicant ({ applicantsDb }) {
  return async function editApplicant ({ applicantId, ...changes } = {}) {
    if (!applicantId) {
      throw new Error('You must supply an id.')
    }
    const existing = await applicantsDb.findById({ applicantId })

    if (!existing) {
      throw new RangeError('applicant not found.')
    }
    const applicant = makeApplicant({ ...existing, ...changes, updatedAt: Date.now() })
    const updated = await applicantsDb.update({
      id: applicant.getId(),
      firstname: applicant.getFirstname(),
      lastname: applicant.getLastname(),
      phones: applicant.getPhones(),
      countryId: applicant.getCountryId(),
      dateOfBirth: applicant.getDateOfBirth(),
      birthplace: applicant.getBirthplace(),
      genderId: applicant.getGenderId(),
      cid: applicant.getCid(),
      location: applicant.getLocation(),
      address: applicant.getAddress(),
      maritalStatus: applicant.getMaritalStatus(),
      legalForm: applicant.getLegalForm(),
      professionalSituation: applicant.getProfessionalSituation(),
      bankAccounts: applicant.getBankAccounts(),
      publicFundingReceived: applicant.getPublicFundingReceived(),
      currentCredits: applicant.getCurrentCredits(),
      completed: applicant.getCompleted(),
      handicaps: applicant.getHandicaps(),
      levelOfStudy: applicant.getLevelOfStudy(),
      contactLanguage: applicant.getContactLanguage(),
      updatedAt: applicant.getUpdatedAt()
    })
    return { ...existing, ...updated }
  }
}

module.exports = makeEditApplicant