async function notFound () {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    body: { error: 'Not found Error.' },
    statusCode: 404
  }
}

module.exports = notFound
