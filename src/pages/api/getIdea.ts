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
            const queryIdeas = `
                SELECT * FROM ideas
                WHERE email = $1
            `;
            const { rows: ideas } = await pool.query(queryIdeas, [email]);

            if (ideas.length > 0) {
                const formatoIds = ideas.map(idea => idea.formato_idea);

                const queryFormatos = `
                    SELECT id, description FROM formato_ideas
                    WHERE id = ANY($1::int[])
                `;

                const estadoIds = ideas.map(idea => idea.estado_ideas);

                const queryEstados = `
                SELECT id, description FROM estados_idea
                WHERE id = ANY($1::int[])
            `;

                const { rows: formatos } = await pool.query(queryFormatos, [formatoIds]);

                const { rows: estados } = await pool.query(queryEstados, [estadoIds]);

                const formatoMap = formatos.reduce((acc, formato) => {
                    acc[formato.id] = formato.description.toUpperCase();
                    return acc;
                }, {});

                const estadoMap = estados.reduce((acc, estado) => {
                    acc[estado.id] = estado.description.toUpperCase();
                    return acc;
                }, {});


                const updatedIdeas = ideas.map(idea => {
                    const updatedIdea = {
                        ...idea,
                        formato_idea: formatoMap[idea.formato_idea] || idea.formato_idea,
                        estado_ideas: estadoMap[idea.estado_ideas] || idea.estado_ideas,
                    };

                    // Convertir todos los campos de la idea a mayúsculas
                    Object.keys(updatedIdea).forEach(key => {
                        if (typeof updatedIdea[key] === 'string') {
                            updatedIdea[key] = updatedIdea[key].toUpperCase();
                        }
                    });

                    return updatedIdea;
                });

                res.status(200).json({ success: true, ideas: updatedIdeas });
            } else {
                res.status(200).json({ success: true, ideas: [] });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
