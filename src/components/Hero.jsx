import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sedan from '../assets/sedan-removebg-preview.png';
import suv from '../assets/suv-removebg-preview.png';
import traveller from '../assets/traveller-removebg-preview.png';
import innova from '../assets/innova.png'

const cars = [
  { image: sedan, name: "Sedan", tagline: "Comfort Travel" },
  { image: suv, name: "SUV", tagline: "Family Trips" },
  { image: traveller, name: "Traveller", tagline: "Group Tours" },
  { image: innova, name: "Toyota Innova", tagline: "Family Trips" },
];

export default function Hero() {
  const [currentCar, setCurrentCar] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCar((prev) => (prev + 1) % cars.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cars.length]);

  return (
    <section className="hero">
      {/* Decorative shapes */}
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__badge">🚕 #1 Cab Service in Pune</span>
          <h1>Premium Cab Services for Your Every Need</h1>
          <p className="hero__subtitle">
            Reliable, safe, and professional transportation across Pune and beyond.
          </p>
          <div className="hero__features-list">
            <div className="hero__feature-item">
              <span className="icon">🛡️</span>
              <span>Safe & Secure</span>
            </div>
            <div className="hero__feature-item">
              <span className="icon">⏱️</span>
              <span>On-Time Every Time</span>
            </div>
            <div className="hero__feature-item">
              <span className="icon">💰</span>
              <span>Best Price Guarantee</span>
            </div>
            <div className="hero__feature-item">
              <span className="icon">🧾</span>
              <span>GST Bill Available</span>
            </div>
          </div>
          <div className="hero__cta-group">
            <a href="tel:+917758919483" className="cta">Call Now</a>
            <Link to="/booking-request" className="cta cta--booking">Booking Request</Link>
            <a href="#services" className="cta cta--secondary">Explore Services</a>
          </div>
        </div>

        <div className="hero__carousel">
          <div className="hero__car-showcase">
            {cars.map((car, idx) => (
              <div
                key={car.name}
                className={`hero__car-slide ${idx === currentCar ? 'active' : ''}`}
              >
                <img src={car.image} alt={car.name} />
              </div>
            ))}
          </div>
          <div className="hero__car-info">
            <span className="hero__car-name">{cars[currentCar].name}</span>
            <span className="hero__car-tagline">{cars[currentCar].tagline}</span>
          </div>
          <div className="hero__car-dots">
            {cars.map((_, idx) => (
              <button
                key={idx}
                className={`hero__car-dot ${idx === currentCar ? 'active' : ''}`}
                onClick={() => setCurrentCar(idx)}
                aria-label={`View ${cars[idx].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
