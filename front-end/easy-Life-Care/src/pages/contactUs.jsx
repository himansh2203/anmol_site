import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "../css/contact.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"; // Social media icons
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Other icons

function ContactUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contactUs") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    };
  }, [location.pathname]);

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out!</p>

        <div className="contact-icons">
          <div className="contact-item">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>Easy Life Care</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <span>M-Block,Cannaught Place, Delhi, India , 110001</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>+91 8076250586</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>support@easylifecare.com</span>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <span>
              <a
                href="https://www.instagram.com/easylifecare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <span>
              <a
                href="https://www.facebook.com/easylifecare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </span>
          </div>
        </div>

        {/* Add Google Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112131.02808134654!2d77.2197711!3d28.6326347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3726fdcbff%3A0x1e3a869be3756341!2sBlock%20M%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1715866617031!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
