const postgres = require('pg-promise')();
const db = postgres({
	user: 'postgres',
	password: 'tigre225',
	host: 'localhost',
	port: 5432,
	database: 'blog'
});

module.exports = db;
