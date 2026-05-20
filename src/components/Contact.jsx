export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="contact__intro">
          Have questions or ready to book? Contact us anytime - we're available 24/7
        </p>
        <div className="contact__grid">
          <div className="contact__item">
            <div className="contact__icon">📞</div>
            <h3>Phone</h3>
            <p>Call us for instant booking</p>
            <p>📞 <a href="tel:+917758919483">+91 7758919483</a></p>
            <p>📞 <a href="tel:+918830324668">+91 8830324668</a></p>
          </div>
          <div className="contact__item">
            <div className="contact__icon">📧</div>
            <h3>Email</h3>
            <p>Send us an email</p>
            <p>📧 <a href="mailto:SHANKHCABS@GMAIL.COM">shankhcabs@gmail.com</a></p></div>
          <div className="contact__item">
            <div className="contact__icon">📍</div>
            <h3>Location</h3>
            <p>Visit our office</p>
            <address className="contact__address">
              Shankh Cabs Services
            </address>
          </div>
          <div className="contact__item">
            <div className="contact__icon">🕐</div>
            <h3>Business Hours</h3>
            <p>We're always available</p>
            <p className="contact__hours">
              Monday - Sunday<br />
              24 Hours Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
