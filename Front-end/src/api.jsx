import axios from 'axios';

// URL base del backend
const API_BASE_URL = 'http://localhost:3001';

// Función para enviar el formulario de contacto
export const sendContactForm = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/send-email`, formData);
        return response.data;
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        throw error;
    }
};