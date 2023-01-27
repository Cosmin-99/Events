import { NextApiRequest, NextApiResponse } from "next";
import { databaseConnection } from "../../server";
import SQL from "@nearform/sql";
import { Comment } from "../../server/models/comment";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const requestMethod = req.method;

    switch (requestMethod) {
        case 'POST':
            const body: Comment = req.body;
            const sqlSyntax = SQL`INSERT INTO "comments" ("email", "name", "text") VALUES (
                ${body.email},
                ${body.name},
                ${body.text}
            )`

            await databaseConnection.query(sqlSyntax)

            res.status(200).json({ ok: true })
        
        case 'GET':
            const sql = SQL`SELECT * from comments`
            const { rows } = await databaseConnection.query(sql)
            const comments: Comment[] = rows;

            res.status(200).json(comments)
    }
}