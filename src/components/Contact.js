import React, { useState } from 'react';
import './css/Contact.css'; // Asegúrate de añadir el CSS correspondiente

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Formulario enviado');
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="form-container">
          <h1>Contacto</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn-submit">Enviar</button>
              <button type="button" onClick={handleClear} className="btn-clear">Limpiar</button>
            </div>
          </form>
        </div>
        <div className="map-container">
          <h2>Ubicación</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.846799360705!2d-58.42115502352375!3d-34.78463186707642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb38101c899bf335%3A0xa401341208e2b13e!2sMate%20%26%20Tea%20-%20Experiencias!5e0!3m2!1ses!2sar!4v1726177962252!5m2!1ses!2sar"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Ubicación"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
