const mysql = require('mysql');

// Database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Quoti1'
};

// Create connection
const connection = mysql.createConnection(dbConfig);

// Connect to MySQL server
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database!");
});

module.exports = connection;
