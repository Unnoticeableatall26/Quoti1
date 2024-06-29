const mysql = require('../utils/database');
const bcrypt = require('bcrypt'); // Assuming you're using bcrypt for password hashing

exports.createUser = async (username, password, email, role, callback) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const sql = 'INSERT INTO User (Username, Password_Hash, Email, Role) VALUES (?,?,?,?)';
        mysql.query(sql, [username, hashedPassword, email, role], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId);
        });
    } catch (error) {
        callback(error);
    }
};

exports.getUserById = (userId, callback) => {
    const sql = 'SELECT * FROM User WHERE UserID =?';
    mysql.query(sql, userId, (err, result) => {
        if (err) return callback(err);
        callback(null, result[0]); // Return the first result
    });
};

exports.getUserByUsername = (username, callback) => {
    const sql = 'SELECT * FROM User WHERE Username =?';
    mysql.query(sql, username, (err, result) => {
        if (err) return callback(err);
        callback(null, result[0]); // Return the first result
    });
};

exports.updateUser = (userId, username, email, role, callback) => {
    const sql = 'UPDATE User SET Username =?, Email =?, Role =? WHERE UserID =?';
    mysql.query(sql, [username, email, role, userId], (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};

exports.deleteUser = (userId, callback) => {
    const sql = 'DELETE FROM User WHERE UserID =?';
    mysql.query(sql, userId, (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};

exports.comparePasswords = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match; // true if passwords match, false otherwise
    } catch (error) {
        throw error;
    }
};

