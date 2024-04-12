import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { name, email, projectTitle, creationDate, idea, emailReceiver } = req.body;

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || '',
                port: parseInt(process.env.SMTP_PORT || '2525', 10),
                secure: false,
                auth: {
                    user: process.env.SMTP_USER || '',
                    pass: process.env.SMTP_PASS || '',
                },
            });

            const mailOptions = {
                from: process.env.SMTP_USER || '',
                to: emailReceiver,
                subject: `Nueva idea de ${name}`,
                text: `
                    Nombre: ${name}
                    Email: ${email}
                    Título del proyecto: ${projectTitle}
                    Fecha de creación: ${creationDate}
                    
                    Descripción de la idea:
                    ${idea}
                `,
            };

            await transporter.sendMail(mailOptions);

            res.status(200).json({ success: true });
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Error sending email' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
};
