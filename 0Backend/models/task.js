const mysql = require('../utils/database');

exports.createTask = (description, status, priority, dueDate, createDate, title, workspaceId, callback) => {
    const sql = 'INSERT INTO Tasks (Description, Status, Priority, DueDate, Create_Date, Title, Workspace_ID) VALUES (?,?,?,?,?,?,?)';
    mysql.query(sql, [description, status, priority, dueDate, createDate, title, workspaceId], (err, result) => {
        if (err) return callback(err);
        callback(null, result.insertId);
    });
};

exports.getTasksByWorkspaceId = (workspaceId, callback) => {
    const sql = 'SELECT * FROM Tasks WHERE Workspace_ID =?';
    mysql.query(sql, workspaceId, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

exports.getTaskById = (taskId, callback) => {
    const sql = 'SELECT * FROM Tasks WHERE TaskID =?';
    mysql.query(sql, taskId, (err, result) => {
        if (err) return callback(err);
        callback(null, result[0]);
    });
};

exports.updateTask = (taskId, description, status, priority, dueDate, createDate, title, callback) => {
    const sql = 'UPDATE Tasks SET Description =?, Status =?, Priority =?, DueDate =?, Create_Date =?, Title =? WHERE TaskID =?';
    mysql.query(sql, [description, status, priority, dueDate, createDate, title, taskId], (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};

exports.deleteTask = (taskId, callback) => {
    const sql = 'DELETE FROM Tasks WHERE TaskID =?';
    mysql.query(sql, taskId, (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};

