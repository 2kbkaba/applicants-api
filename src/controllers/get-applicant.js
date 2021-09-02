function makeGetApplicant ({ listApplicant }) {
  return async function getApplicant (httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const applicant = await listApplicant({
        applicantId: httpRequest.query.applicantId
      })
      return {
        headers,
        statusCode: 200,
        body: applicant
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}

module.exports = makeGetApplicant