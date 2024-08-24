"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: "postgresql://firstdb_owner:s2uj1LkUbydp@ep-restless-night-a5vck74g.us-east-2.aws.neon.tech/firstdb?sslmode=require"
});
// async function createUsersTable() {
//     const createTableQuery = `
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//         );
//     `;
//     try {
//         const client = await pool.connect();
//         await client.query(createTableQuery);
//         console.log("Users table created successfully");
//         client.release();
//     } catch (error) {
//         console.log("Error creating users table ", error);
//     } finally {
//         await pool.end();
//     }
// }
function deleteTable(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        try {
            const dropTableQuery = `DROP TABLE IF EXISTS ${tableName};`;
            yield client.query(dropTableQuery);
            console.log(`Table ${tableName} deleted successfully.`);
        }
        catch (error) {
            console.error(`Error deleting table ${tableName}:`, error);
        }
        finally {
            client.release();
        }
    });
}
// createUsersTable();
deleteTable('users')
    .then(() => pool.end())
    .catch((error) => {
    console.error('Unexpected error:', error);
    pool.end();
});
module.exports = pool;
