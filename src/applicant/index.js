const Id = require('../Id')
const buildMakeApplicant = require('./applicant')

const makeApplicant = buildMakeApplicant({ Id })

module.exports = makeApplicant