const mysql = require('../utils/database');

const mysql = require('../utils/database');

exports.createNote = (content, formatting, modificationDate, ownerId, createDate, workspaceId, callback) => {
    const sql = 'INSERT INTO Note (Content, Formatting, Modification_Date, Owner_UserID, Create_Date, Workspace_ID) VALUES (?,?,?,?,?,?)';
    mysql.query(sql, [content, formatting, modificationDate, ownerId, createDate, workspaceId], (err, result) => {
        if (err) return callback(err);
        callback(null, result.insertId);
    });
};

exports.getNotesByWorkspaceId = (workspaceId, callback) => {
    const sql = 'SELECT * FROM Note WHERE Workspace_ID =?';
    mysql.query(sql, workspaceId, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

exports.getNoteById = (noteId, callback) => {
    const sql = 'SELECT * FROM Note WHERE NoteID =?';
    mysql.query(sql, noteId, (err, result) => {
        if (err) return callback(err);
        callback(null, result[0]);
    });
};

exports.updateNote = (noteId, content, formatting, modificationDate, callback) => {
    const sql = 'UPDATE Note SET Content =?, Formatting =?, Modification_Date =? WHERE NoteID =?';
    mysql.query(sql, [content, formatting, modificationDate, noteId], (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};

exports.deleteNote = (noteId, callback) => {
    const sql = 'DELETE FROM Note WHERE NoteID =?';
    mysql.query(sql, noteId, (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};
