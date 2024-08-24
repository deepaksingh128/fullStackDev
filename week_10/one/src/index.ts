import { Pool } from 'pg'

const pool  = new Pool({
    connectionString: "postgresql://firstdb_owner:s2uj1LkUbydp@ep-restless-night-a5vck74g.us-east-2.aws.neon.tech/firstdb?sslmode=require"
});

async function createUsersTable() {
    const createTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        const client = await pool.connect();
        await client.query(createTableQuery);
        console.log("Users table created successfully");
        client.release();
    } catch (error) {
        console.log("Error creating users table ", error);
    } finally {
        await pool.end();
    }
}

async function deleteTable(tableName: string): Promise<void> {
    const client = await pool.connect();
    try {
      const dropTableQuery = `DROP TABLE IF EXISTS ${tableName};`;
      await client.query(dropTableQuery);
      console.log(`Table ${tableName} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting table ${tableName}:`, error);
    } finally {
      client.release();
    }
  }

// createUsersTable();

// deleteTable('users')
//   .then(() => pool.end())
//   .catch((error) => {
//     console.error('Unexpected error:', error);
//     pool.end();
//   });


module.exports = pool;