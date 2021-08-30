import Id from '../Id'

export default function makeApplicantsDb ({ makeDb }) {
  return Object.freeze(
    {
      insert,
      checkApplicant
    }
  )

  async function checkApplicant ({ cid, phone }) {
    const db = await makeDb()
    const query = { $or: [ { "cid.number": cid.number }, { "phone.mobile": phone.mobile } ] }
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
      .collection('applicant')
      .insertOne({ _id, ...applicantInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }
}