const {randomBytes,createHmac,createHash} = require('crypto');

const word = 'ladylikely';
const stagkey = 'prick';
const randomizedKey = randomBytes(20);


function HMACed(word,stagkey,randomizedKey){
    const hashedWord = createHash('sha256')
        .update(word)
        .digest('hex')
    const hashedWord1 = createHmac('sha256',stagkey)
        .update(word)
        .digest('hex');
    const hashedWord2 = createHmac('sha256',randomizedKey)
        .update(word)
        .digest('hex');
    console.log(`word:${word}\nhash without key:${hashedWord}\nhash with stagnant key:${hashedWord1}\nhash with randomizing key:${hashedWord2}`)
}

HMACed(word, stagkey,randomizedKey)
