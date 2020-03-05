const action = require('./action')

const args = action.parseArgs()

action.exec(args)
