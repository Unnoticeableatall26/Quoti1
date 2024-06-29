const mysql = require('../utils/database');

const mysql = require('../utils/database');

exports.createMultiMedia = (url, itemType, itemId, workspaceId, callback) => {
    const sql = 'INSERT INTO Multi_Media (URL, ItemType, ItemID, Workspace_ID) VALUES (?,?,?,?)';
    mysql.query(sql, [url, itemType, itemId, workspaceId], (err, result) => {
        if (err) return callback(err);
        callback(null, result.insertId);
    });
};

exports.getMultiMediaByWorkspaceId = (workspaceId, callback) => {
    const sql = 'SELECT * FROM Multi_Media WHERE Workspace_ID =?';
    mysql.query(sql, workspaceId, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

exports.getMultiMediaById = (itemId, callback) => {
    const sql = 'SELECT * FROM Multi_Media WHERE ItemID =?';
    mysql.query(sql, itemId, (err, result) => {
        if (err) return callback(err);
        callback(null, result[0]);
    });
};

exports.updateMultiMedia = (itemId, url, itemType, callback) => {
    const sql = 'UPDATE Multi_Media SET URL =?, ItemType =? WHERE ItemID =?';
    mysql.query(sql, [url, itemType, itemId], (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};

exports.deleteMultiMedia = (itemId, callback) => {
    const sql = 'DELETE FROM Multi_Media WHERE ItemID =?';
    mysql.query(sql, itemId, (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};
