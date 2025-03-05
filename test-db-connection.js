const mysql = require('mysql2/promise');
const config = require('./config.json');

async function testConnection() {
    try {
        const { host, port, user, password, database } = config.database;
        const connection = await mysql.createConnection({ host, port, user, password });
        console.log('Connected to MySQL server');

        // Create database if it doesn't exist
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        console.log(`Database ${database} created or already exists`);

        // Use the database
        await connection.query(`USE \`${database}\`;`);
        console.log('Database connection successful');

        await connection.end();
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

testConnection();