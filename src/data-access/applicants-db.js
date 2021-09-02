const Id = require('../Id')

function makeApplicantsDb ({ makeDb }) {
  return Object.freeze(
    {
      findAll,
      insert,
      checkApplicant
    }
  )

  async function findAll () {
    const db = await makeDb()
    const result = await db.collection('applicants').find()
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }

  async function checkApplicant ({ cid, phones }) {
    const db = await makeDb()
    const query = { $or: [ { "cid.number": cid.number }, { "phones.mobile": phones.mobile } ] }
    const result = await db.collection('applicants').find(query)
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...insertedInfo } = found[0]
    return { id, ...insertedInfo }
  }

  async function insert ({ id: _id = Id.makeId(), ...applicantInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('applicants')
      .insertOne({ _id, ...applicantInfo })
    console.log(result)
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }
}

module.exports = makeApplicantsDb