function makePutApplicant ({ editApplicant }) {
  return async function putApplicant (httpRequest) {
    try {
      const { ...applicantInfo } = httpRequest.body
      const toEdit = {
        ...applicantInfo,
        applicantId: httpRequest.params.applicantId
      }
      const updated = await editApplicant(toEdit)
      return {
        headers: {
          'Content-Type': 'applicant/json',
          'Last-Modified': new Date(updated.updatedAt).toISOString()
        },
        statusCode: 200,
        body: { updated }
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      if (e.name === 'RangeError') {
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 404,
          body: {
            error: e.message
          }
        }
      }
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}

module.exports = makePutApplicant