import { Pool } from "pg";

let databaseConnection: Pool = null!

if (databaseConnection === null) {
    databaseConnection = new Pool({

        user: process.env.POSTGRES_USER as string,
        host: process.env.POSTGRES_HOST as string,
        password: process.env.POSTGRES_PASSWORD as string,
        database: process.env.POSTGRES_DB as string,
        port: 5432,
    })
}

export { databaseConnection }

