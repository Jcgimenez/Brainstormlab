import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : undefined,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_HOST);
console.log(process.env.DATABASE_NAME);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_PORT);

    if (req.method === 'POST') {
        const { name, email, projectTitle, idea, date } = req.body;

        try {
            const query = `
                INSERT INTO ideas (name, email, project_title, description, created_at, updated_at)
                VALUES ($1, $2, $3, $4, NOW(), NOW())
            `;

            await pool.query(query, [name, email, projectTitle, idea]);

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
