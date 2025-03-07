// src/components/Contact.js
import React, { useState } from 'react';
import { sendContactForm } from '../api'; // Importa la función del archivo api.js

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        consulta: '',
    });
    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar el número de teléfono (debe tener 9 dígitos)
        const telefonoLimpio = formData.telefono.replace(/\D/g, '');
        if (telefonoLimpio.length !== 9) {
            setMensaje('El número de teléfono debe tener 9 dígitos.');
            return;
        }

        try {
            const response = await sendContactForm(formData); // Usa la función de api.js
            setMensaje(response.message); // Muestra el mensaje de éxito
        } catch (error) {
            setMensaje('Error al enviar el formulario. Por favor, inténtalo de nuevo.'); // Muestra el mensaje de error
        }
    };

    return (
        <section id="contact">
            <h2>Contacto</h2>
            {mensaje && <div className={`mensaje ${mensaje.includes('Error') ? 'error' : 'success'}`}>{mensaje}</div>}
            <form id="consulta-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Tu nombre:</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Escribe tu nombre" value={formData.nombre} onChange={handleChange} />

                <label htmlFor="email">Tu correo electrónico:</label>
                <input type="email" id="email" name="email" required placeholder="Escribe tu correo electrónico" value={formData.email} onChange={handleChange} />

                <label htmlFor="telefono">Tu número de teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required placeholder="Escribe tu número de teléfono" value={formData.telefono} onChange={handleChange} />

                <label htmlFor="consulta">Tu consulta:</label>
                <textarea id="consulta" name="consulta" required placeholder="Escribe tu consulta aquí..." rows="5" value={formData.consulta} onChange={handleChange}></textarea>

                <button type="submit" id="DataSubmit">Enviar consulta</button>
            </form>
        </section>
    );
};

export default Contact;