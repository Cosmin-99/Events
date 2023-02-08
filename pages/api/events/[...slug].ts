import { NextApiRequest, NextApiResponse } from "next";
import { databaseConnection } from "../../../server";
import SQL from "@nearform/sql";
import { Event } from "../../../utils/utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug  = req.query.slug as string[];
    const sql = SQL`SELECT * FROM events WHERE EXTRACT('month' FROM events.date) = ${slug[1]} AND EXTRACT('year' FROM events.date) = ${slug[0]}`;
    
    const { rows } = await databaseConnection.query(sql)

    res.status(200).json(rows as Event[]);
}