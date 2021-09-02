const makeApplicantsDb = require('./applicants-db')
const { MongoClient } = require('mongodb')

// Connection URL
const url = process.env.DM_APPLICANTS_DB_URL
const dbName = process.env.DM_APPLICANTS_DB_NAME
const client = new MongoClient(url)

async function makeDb () {
  await client.connect()
  return client.db(dbName)
}
module.exports = makeDb
const applicantsDb = makeApplicantsDb({ makeDb })
module.exports = applicantsDb
