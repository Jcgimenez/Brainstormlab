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

    if (req.method === 'GET') {
        const { email } = req.query;

        if (!email) {
            res.status(400).json({ success: false, message: 'Email parameter is required' });
            return;
        }

        try {
            const query = `
                SELECT * FROM ideas
                WHERE email = $1
            `;

            const { rows } = await pool.query(query, [email]);

            res.status(200).json({ success: true, ideas: rows });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
