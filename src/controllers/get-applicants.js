function makeGetApplicants ({ listApplicants }) {
  return async function getApplicants () {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const applicants = await listApplicants()
      return {
        headers,
        statusCode: 200,
        body: applicants
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

module.exports = makeGetApplicants