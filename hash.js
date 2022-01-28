// a hash is basically just an encryption without the decrypt

const {createHash} = require('crypto');

word = 'my name is walter hardwill white'

function hasher(word){
    const hashedWord =
    // enter hashing algorithm
        createHash('sha256')
    // enter string to hash
        .update(word)
    // enter an output format, it may either be
    // "binary", "hex" or "base64". It defaults to binary.
        .digest('hex')
    console.log(`word:${word}\nhash:${hashedWord}`)

}

hasher(word)

// tho the hash is too predictable as the hash is the same everytime
// this brings us to HMAC

