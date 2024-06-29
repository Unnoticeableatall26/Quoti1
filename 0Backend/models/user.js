const mysql = require('../utils/database');

exports.createUser = (username, passwordHash, email, role, callback) => {
    const sql = 'INSERT INTO User (Username, Password_Hash, Email, Role) VALUES (?,?,?,?)';
    mysql.query(sql, [username, passwordHash, email, role], (err, result) => {
        if (err) return callback(err);
        callback(null, result.insertId);
    });
};

// Add more functions as needed for CRUD operations
