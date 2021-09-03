function buildMakeApplicant({ Id }) {
  return function makeApplicant(
    {
      id = Id.makeId(),
      userId = Id.makeId(),
      firstname,
      lastname,
      phones,
      countryId,
      dateOfBirth,
      birthplace,
      genderId,
      cid,
      location,
      address,
      maritalStatus,
      legalForm,
      professionalSituation,
      bankAccounts,
      publicFundingReceived,
      currentCredits,
      completed,
      handicaps,
      levelOfStudy,
      contactLanguage,
      createdAt = Date.now(),
      updatedAt = Date.now(),
    } = {}
  ) {
    if (!Id.isValidId(id)) {
      throw new Error('Applicant must have a valid id.')
    }
    if (!Id.isValidId(userId)) {
      throw new Error('Applicant must have a valid userId.')
    }
    if (!firstname) {
      throw new Error('Applicant must have a firstname.')
    }
    if (!(typeof (firstname) === 'string') || firstname.trim().length < 2) {
      throw new Error('Firstname must be a string of at least 2 characters.')
    }
    if (!lastname) {
      throw new Error('Applicant must have a lastname.')
    }
    if (!(typeof (lastname) === 'string') || lastname.trim().length < 2) {
      throw new Error('Lastname must be a string of at least 2 characters.')
    }
    if (!phones) {
      throw new Error('Applicant must have phones numbers.')
    }
    if (!(typeof (phones) === 'object' && phones instanceof Object && phones.mobile.trim())) {
      throw new Error('Phones must be an object with at least a mobile attribute.')
    }
    if (!countryId) {
      throw new Error('Applicant must have a countryId.')
    }
    if (!dateOfBirth) {
      throw new Error('Applicant must have a dateOfBirth')
    }
    if (!birthplace) {
      throw new Error('Applicant must have a birthplace.')
    }
    if (!genderId) {
      throw new Error('Applicant must have a genderId.')
    }
    if (!cid) {
      throw new Error('Applicant must have a cid.')
    }

    return Object.freeze(
      {
        getId: () => id,
        getUserId: () => userId,
        getFirstname: () => firstname,
        getLastname: () => lastname,
        getPhones: () => phones,
        getCountryId: () => countryId,
        getDateOfBirth: () => dateOfBirth,
        getBirthplace: () => birthplace,
        getGenderId: () => genderId,
        getCid: () => cid,
        getLocation: () => location,
        getAddress: () => address,
        getMaritalStatus: () => maritalStatus,
        getLegalForm: () => legalForm,
        getProfessionalSituation: () => professionalSituation,
        getBankAccounts: () => bankAccounts,
        getPublicFundingReceived: () => publicFundingReceived,
        getCurrentCredits: () => currentCredits,
        getCompleted: () => completed,
        getHandicaps: () => handicaps,
        getLevelOfStudy: () => levelOfStudy,
        getContactLanguage: () => contactLanguage,
        getCreatedAt: () => createdAt,
        getUpdatedAt: () => updatedAt
      }
    )
  }
}

module.exports = buildMakeApplicant