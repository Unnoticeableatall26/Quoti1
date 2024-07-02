const jwt = require('jsonwebtoken');

function generateToken(userId, secretKey) {
    const payload = { userId };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Expires in 1 hour
    return token;
}

// Usage example
const secretKey = 'your-jwt-secret-key';
const userId = 3; // Example user ID
const token = generateToken(userId, secretKey);
console.log(`Generated Token: ${token}`);























