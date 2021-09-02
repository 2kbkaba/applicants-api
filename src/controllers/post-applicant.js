function makePostApplicant ({ addApplicant }) {
  return async function postApplicant (httpRequest) {
    try {
      const { ...applicantInfo } = httpRequest.body
      const posted = await addApplicant({
        ...applicantInfo
      })
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(posted.updatedAt).toUTCString()
        },
        statusCode: 201,
        body: { posted }
      }
    } catch (e) {
      // TODO: Error logging system
      console.log(e)

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

module.exports = makePostApplicant