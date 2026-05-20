export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Shankh Cabs</h3>
            <p className="footer__description">
              Your trusted partner for safe, comfortable, and affordable transportation in Pune and beyond.
            </p>
            <div className="footer__contact">
              <p>📞 <a href="tel:+917758919483">+91 7758919483</a></p>
              <p>📞 <a href="tel:+918830324668">+91 8830324668</a></p>
              <p>📧 <a href="mailto:SHANKHCABS@GMAIL.COM">shankhcabs@gmail.com</a></p>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#services">Our Services</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#coverage">Coverage Areas</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li>Local City Rides</li>
              <li>Outstation Travel</li>
              <li>Airport Pickup & Drop</li>
              <li>Corporate Cabs</li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">Working Hours</h4>
            <p className="footer__hours">
              Monday - Sunday<br />
              24 Hours Service<br />
              Available 365 Days
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Shankh Cabs Pune. All rights reserved.
          </p>
          <p className="footer__tagline">
            Drive Safe. Travel Smart. Choose Shankh Cabs.
          </p>
        </div>
      </div>
    </footer>
  );
}
