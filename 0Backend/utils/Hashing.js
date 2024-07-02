const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
    }
}

// Usage example
hashPassword('your-password-here')
   .then(hashedPassword => console.log(`Hashed Password: ${hashedPassword}`))
   .catch(error => console.error(error));




















   