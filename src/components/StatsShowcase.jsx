export default function StatsShowcase() {
  const stats = [
    { value: "3+", label: "Years of Experience", icon: "🏆" },
    { value: "5K+", label: "Happy Customers", icon: "👥" },
    { value: "10+", label: "Fleet Vehicles", icon: "🚗" },
    { value: "24/7", label: "Service Availability", icon: "⏰" }
  ];

  return (
    <div className="stats-showcase">
      <div className="container">
        <div className="stats-showcase__grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stats-showcase__item">
              <div className="stats-showcase__icon-wrapper">
                <span className="stats-showcase__icon" role="img" aria-label={stat.label}>
                  {stat.icon}
                </span>
              </div>
              <div className="stats-showcase__info">
                <h3 className="stats-showcase__value">{stat.value}</h3>
                <p className="stats-showcase__label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
