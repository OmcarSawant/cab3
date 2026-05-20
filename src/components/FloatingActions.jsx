import { FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

export default function FloatingActions() {
    return (
        <div className="floating-actions">
            <a
                href="tel:+917758919483"
                className="floating-action call"
                aria-label="Call Us"
            >
                <FaPhoneAlt />
            </a>
            <a
                href="https://wa.me/917758919483"
                className="floating-action whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp />
            </a>
            <a
                href="https://www.instagram.com/shankhcabspune?igsh=MWx0N3Mxb3MwMzJueg=="
                className="floating-action instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
            >
                <FaInstagram />
            </a>
        </div>
    );
}
