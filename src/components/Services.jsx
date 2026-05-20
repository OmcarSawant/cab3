export default function Services() {
  const services = [
    {
      title: "Local City Rides",
      icon: "🚗",
      description: "Explore Pune city with our comfortable local cab services. Perfect for daily commuting and shopping.",
      features: ["Hourly & per km rates", "24/7 Availability"]
    },
    {
      title: "Outstation Travel",
      icon: "🛣️",
      description: "Reliable and safe cab services for your outstation trips to Mumbai, Goa, Nashik, and beyond.",
      features: ["One-way & Round trip", "Verified Drivers"]
    },
    {
      title: "Airport Transfers",
      icon: "✈️",
      description: "Timely and hassle-free transfers to and from Pune & Mumbai Airports. Never miss a flight.",
      features: ["Punctual Service", "Fixed Rates"]
    },
    {
      title: "Corporate Cabs",
      icon: "💼",
      description: "Dedicated corporate cab services for businesses. Manage employee transportation efficiently.",
      features: ["Monthly Packages", "Invoice Billing"]
    },
  ];

  const popularRoutes = [
    { route: "Pune to Mumbai Airport", price: "Starts ₹2500" },
    { route: "Pune to Mahabaleshwar", price: "Starts ₹3500" },
    { route: "Pune to Shirdi", price: "Starts ₹3000" },
    { route: "Pune to Lonavala", price: "Starts ₹1800" },
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-badge">Our Services</span>
          <h2>Comprehensive Cab Solutions</h2>
          <p className="services__intro">
            Providing reliable and comfortable transportation across Pune and beyond.
          </p>
        </div>

        <div className="grid services-grid">
          {services.map(service => (
            <div key={service.title} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <a href="tel:+917758919483" className="service-card__cta">Book Now</a>
            </div>
          ))}
        </div>

        <div className="popular-routes">
          <h3>Popular Routes</h3>
          <div className="popular-routes__grid">
            {popularRoutes.map((item, idx) => (
              <div key={idx} className="route-pill">
                <span className="route-name">{item.route}</span>
                <span className="route-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
