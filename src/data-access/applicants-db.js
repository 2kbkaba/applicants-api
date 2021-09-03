const Id = require('../Id')

function makeApplicantsDb ({ makeDb }) {
  return Object.freeze(
    {
      checkApplicant,
      findAll,
      findById,
      insert,
      update,
      remove
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

  async function findById ({ applicantId }) {
    const db = await makeDb()
    const result = await db.collection('applicants').find({ _id: applicantId })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return  { id, ...info }
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

  async function update ({ id: _id, ...applicantInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('applicants')
      .updateOne({ _id }, { $set: { ...applicantInfo } })
    return result.modifiedCount > 0 ? { id: _id, ...applicantInfo } : null
  }

  async function remove ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('applicants').deleteOne({ _id })
    return result.deletedCount
  }
}

module.exports = makeApplicantsDb