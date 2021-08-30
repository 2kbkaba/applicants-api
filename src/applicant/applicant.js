export default function buildMakeApplicant({ Id }) {
  return function makeApplicant(
    {
      id = Id.makeId(),
      userId,
      firstname,
      lastname,
      phones,
      countryId,
      dateOfBirth,
      birthplace,
      genderId,
      cid,
      createdAt = Date.now(),
      updatedAt = Date.now(),
    } = {}
  ) {
    if (!Id.isValidId(id)) {
      throw new Error('Applicant must have a valid id.')
    }
    if (!userId) {
      throw new Error('Applicant must have a valid userId.')
    }
    if (!firstname) {
      throw new Error('Applicant must have a firstname.')
    }
    if (!lastname) {
      throw new Error('Applicant must have a lastname.')
    }
    if (!phones) {
      throw new Error('Applicant must have phones numbers.')
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
        getCreatedAt: () => createdAt,
        getUpdatedAt: () => updatedAt
      }
    )
  }
}