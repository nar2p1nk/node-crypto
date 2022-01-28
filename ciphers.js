const {createCipheriv,Decipher,randomBytes} = require('crypto')

const word = 'like a love song!';
const key = randomBytes(32);
const iv = randomBytes(16);

function encrypt(word){
    let cipher = createCipheriv('aes-256-cbc',Buffer.from(key),iv);
    
    let encryptedWord = cipher.update(word)

    encryptedWord = Buffer.concat([encryptedWord,cipher.final()]);


    return { iv: iv.toString('hex'),
    encryptedData: encryptedWord.toString('hex') };
}

const hashedWord = encrypt(word)
console.log(hashedWord)
