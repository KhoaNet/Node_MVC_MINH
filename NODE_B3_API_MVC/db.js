const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'khoa',
    password: '123',
    database: 'db_demo'
});

module.exports = connection;
