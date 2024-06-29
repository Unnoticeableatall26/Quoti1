const mysql = require('../utils/database');

exports.createTag = (tagColor, tagName, callback) => {
    const sql = 'INSERT INTO Tag (Tag_Color, Tag_Name) VALUES (?,?)';
    mysql.query(sql, [tagColor, tagName], (err, result) => {
        if (err) return callback(err);
        callback(null, result.insertId);
    });
};

exports.getTagById = (id, callback) => {
    const sql = 'SELECT * FROM Tag WHERE TagID =?';
    mysql.query(sql, id, (err, result) => {
        if (err) return callback(err);
        callback(null, result[0]);
    });
};

exports.updateTag = (id, tagColor, tagName, callback) => {
    const sql = 'UPDATE Tag SET Tag_Color =?, Tag_Name =? WHERE TagID =?';
    mysql.query(sql, [tagColor, tagName, id], (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};

exports.deleteTag = (id, callback) => {
    const sql = 'DELETE FROM Tag WHERE TagID =?';
    mysql.query(sql, id, (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};
