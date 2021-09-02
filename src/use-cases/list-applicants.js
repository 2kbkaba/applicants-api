function makeListApplicants ({ applicantsDb }) {
  return async function listApplicants () {
    return await applicantsDb.findAll()
  }
}

module.exports = makeListApplicants