import { NextApiRequest, NextApiResponse } from "next";
import { databaseConnection } from "../../server";
import SQL from "@nearform/sql";
import { Event } from "../../utils/utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const eventId = req.query.eventId;
    const sql = SQL`SELECT * FROM events WHERE id = ${eventId}`;

    const { rows: [row] } = await databaseConnection.query(sql)

    res.status(200).json(row as Event);
}