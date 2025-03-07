import React from 'react';

const Services = () => {
    return (
        <section id="services">
            <h2>Servicios que ofrecemos</h2>
            <div className="services">
                <div className="service-item">
                    <h3>Reparación de teléfonos</h3>
                    <p>Reparamos pantallas rotas, problemas de batería, y más.</p>
                </div>
                <div className="service-item">
                    <h3>Reparación de computadoras</h3>
                    <p>Diagnóstico y reparación de laptops y PCs, tanto de hardware como software.</p>
                </div>
                <div className="service-item">
                    <h3>Reparación de electrodomésticos</h3>
                    <p>Reparaciones rápidas y efectivas de electrodomésticos electrónicos.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;