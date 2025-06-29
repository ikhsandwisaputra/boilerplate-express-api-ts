import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'vuedb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default koneksi;