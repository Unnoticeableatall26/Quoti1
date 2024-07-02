const crypto = require('crypto');

function aesEncrypt(text, secretKey) {
    const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(secretKey, 'hex'), Buffer.alloc(16, 0));
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
}

function aesDecrypt(encryptedText, secretKey) {
    const decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(secretKey, 'hex'), Buffer.alloc(16, 0));
    let decrypted = decipher.update(Buffer.from(encryptedText, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

// Usage example
const secretKey = 'your-secret-key-here'; // Make sure this is a 16-byte key
const textToEncrypt = 'Hello, World!';
const encryptedText = aesEncrypt(textToEncrypt, secretKey);
console.log(`Encrypted Text: ${encryptedText}`);

const decryptedText = aesDecrypt(encryptedText, secretKey);
console.log(`Decrypted Text: ${decryptedText}`);

















