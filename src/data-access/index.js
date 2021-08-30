import makeApplicantsDb from './applicants-db'
const { MongoClient } = require('mongodb')

// Connection URL
const url = process.env.DM_COMMENTS_DB_URL
const dbName = process.env.DM_COMMENTS_DB_NAME
const client = new MongoClient(url)

export async function makeDb () {
  if (client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const applicantsDb = makeApplicantsDb({ makeDb })
export default applicantsDb
