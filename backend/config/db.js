const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:'db',
    user:'root',
    password:'yourpassword',
    database:'mydatabase',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0    
});

module.exports = pool;