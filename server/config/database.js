const mysql = require('mysql2');

// TODO: env
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'chatting',
  password: '123',
});

module.exports = pool.promise();
