import { NextApiRequest, NextApiResponse } from "next";
import { databaseConnection } from "../../server";
import SQL from "@nearform/sql";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const sql = SQL`SELECT * FROM events`;

    const response = await databaseConnection.query(sql)

    res.status(200).json(response.rows);
}