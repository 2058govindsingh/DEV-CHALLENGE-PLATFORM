import sqlite from 'better-sqlite3';

const Database = new sqlite('./db/Database.db');

export default Database;
