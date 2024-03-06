import React from 'react';
import PropTypes from 'prop-types'

const Maps = ({ location }) => {
    const isMobile = window.innerWidth <= 768;

    Maps.propTypes = {
        location: PropTypes.string.isRequired,
    }

    return (
        <div className="flex items-center justify-center my-3 md:w-full mb-lg-10">
            <div style={{
                width: isMobile ? '80%' : '60%',
                maxWidth: '1200px',
                paddingBottom: isMobile ? 'calc(80% / (16 / 12))' : 'calc(80% / (20 / 8))',
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
            }}>
                <iframe
                    title='maps'
                    src={location || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.493641392752!2d110.3979009!3d-7.226762000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708136bdf5c051%3A0x9fe541d662334382!2sKenteng%2C%20Bandungan%2C%20Semarang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1709651687674!5m2!1sen!2sid"}
                    style={{ position: 'absolute', width: '100%', height: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Maps;
