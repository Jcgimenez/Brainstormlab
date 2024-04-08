import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailData {
    name: string;
    email: string;
    idea: string;
    emailReceiver: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
        return res.status(500).json({ success: false, message: 'Credenciales de correo electrónico no configuradas' });
    }

    if (req.method === 'POST') {
        const { name, email, idea, emailReceiver } = req.body as EmailData;

        // Validar datos
        if (!name || !email || !idea || !emailReceiver) {
            return res.status(400).json({ success: false, message: 'Datos incompletos' });
        }

        // Configurar nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass
            }
        });

        // Configurar el correo electrónico
        const mailOptions = {
            from: emailUser,
            to: emailReceiver,
            subject: 'Nueva idea recibida',
            text: `Nombre: ${name}\nEmail: ${email}\nIdea: ${idea}`
        };

        // Enviar el correo electrónico
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Error al enviar el correo electrónico' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Método no permitido' });
    }
}
