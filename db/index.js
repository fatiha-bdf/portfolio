const mysql = require('mysql2')
const pool =  mysql.createPool({
	connectionLimit: 10,
	database: 'portfolio',
	user: 'root',
	password: 'matcha@05',
	host: 'localhost',
})

module.exports = pool.promise()

