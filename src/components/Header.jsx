import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      // Navigate home first, then scroll after page loads
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 70;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Section-based nav items (scroll on home page)
  const sectionItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "packages", label: "Packages" },
    { id: "fleet", label: "Fleet" },
    { id: "testimonials", label: "Testimonials" },
    { id: "coverage", label: "Coverage" },
    { id: "contact", label: "Contact" },
    { id: "map", label: "Find Us" },
  ];

  return (
    <header>
      <div className="container nav">
        <div className="nav__left">
          <button
            className="nav__hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={isMobileMenuOpen ? "active" : ""}></span>
            <span className={isMobileMenuOpen ? "active" : ""}></span>
            <span className={isMobileMenuOpen ? "active" : ""}></span>
          </button>
          <img
            src={logo}
            alt="Shankh Cabs Pune"
            className="nav__logo"
            onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
          />
        </div>
        <nav className="nav__center">
          {sectionItems.map((item) => (
            <button
              key={item.id}
              className="nav__link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <Link to="/about" className="nav__link" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
        </nav>
        <div className="actions">
          <a href="tel:+917758919483" className="call">
            Call Now
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      <nav className={`nav__mobile ${isMobileMenuOpen ? "open" : ""}`}>
        {sectionItems.map((item) => (
          <button
            key={item.id}
            className="nav__mobile-link"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
        <Link
          to="/about"
          className="nav__mobile-link"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
