// HMAC stands for Hash-based Message Authentication Code, and
// is a process for applying a hash algorithm to both data
// and a secret key that results in a single final hash
const {randomBytes,createHmac,createHash} = require('crypto');

const word = 'ladylikely';

// the secret keys
const stagkey = 'prick';
// this one is randomzied for each hash to ensure a unique hash everytime
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

// the flaw to HMAC is that there is no way to decrypt the hash
// and finally we have ciphers
