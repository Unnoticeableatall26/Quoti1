const mysql = require('../utils/database');

exports.createWorkspace = (name, description, customizationSettings, createDate, userId, ownerUserId, userIdCreates, userIdModerates, callback) => {
    const sql = 'INSERT INTO Client_Workspace (Name, Description, Customization_Settings, Create_Date, UserID, Owner_UserID, UserID_Creates, UserID_Moderates) VALUES (?,?,?,?,?,?,?,?)';
    mysql.query(sql, [name, description, customizationSettings, createDate, userId, ownerUserId, userIdCreates, userIdModerates], (err, result) => {
        if (err) return callback(err);
        callback(null, result.insertId);
    });
};

exports.getWorkspacesByUserId = (userId, callback) => {
    const sql = 'SELECT * FROM Client_Workspace WHERE UserID =? OR Owner_UserID =?';
    mysql.query(sql, [userId, userId], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

exports.getWorkspaceById = (workspaceId, callback) => {
    const sql = 'SELECT * FROM Client_Workspace WHERE Workspace_ID =?';
    mysql.query(sql, workspaceId, (err, result) => {
        if (err) return callback(err);
        callback(null, result[0]);
    });
};

exports.updateWorkspace = (workspaceId, name, description, customizationSettings, callback) => {
    const sql = 'UPDATE Client_Workspace SET Name =?, Description =?, Customization_Settings =? WHERE Workspace_ID =?';
    mysql.query(sql, [name, description, customizationSettings, workspaceId], (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};

exports.deleteWorkspace = (workspaceId, callback) => {
    const sql = 'DELETE FROM Client_Workspace WHERE Workspace_ID =?';
    mysql.query(sql, workspaceId, (err, result) => {
        if (err) return callback(err);
        callback(null, result.affectedRows);
    });
};
