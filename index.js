const {log} = require('console')
let crypto = require('crypto');
let ass = crypto
    .createHash('sha256')
    .update('man oh man do i love node!')
    .digest('hex')

log(ass)
