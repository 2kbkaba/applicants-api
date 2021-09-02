const makeApplicant = require('../applicant')
function makeAddApplicant ({ applicantsDb }) {
  return async function addApplicant (data) {
    const applicant = makeApplicant(data)
    const exists = await applicantsDb.checkApplicant({ cid: applicant.getCid(), phones: applicant.getPhones() })
    if (exists) {
      return exists
    }

    return applicantsDb.insert(
      {
        id: applicant.getId(),
        userId: applicant.getUserId(),
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
        createdAt: applicant.getCreatedAt(),
        updatedAt: applicant.getUpdatedAt()
      }
    )
  }
}

module.exports = makeAddApplicant