const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Importa cors
const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Usar Gmail como servicio
    auth: {
        user: process.env.GMAIL_USER, // Usa la variable de entorno
        pass: process.env.GMAIL_PASS, // Usa la variable de entorno 
    },
});

// Ruta GET / para pruebas
app.get('/', (req, res) => {
    res.send('Backend de Level UP Repairs está funcionando correctamente.');
}); 

// Ruta para enviar correos
app.post('/api/send-email', (req, res) => {
    const { nombre, email, telefono, consulta } = req.body;

    const mailOptions = {
        from: 'leveluprepairsesp@gmail.com', // Cambia esto por tu correo
        to: 'leveluprepairsesp@gmail.com', // Cambia esto por el correo del destinatario
        subject: `Nueva consulta de ${nombre}`,
        html: `
            <h1>Nueva consulta/reparación recibida</h1>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Consulta:</strong> ${consulta}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).json({ success: false, message: 'Error al enviar el correo' });
        }
        console.log('Correo enviado:', info.response);
        res.json({ success: true, message: 'Correo enviado correctamente' });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});