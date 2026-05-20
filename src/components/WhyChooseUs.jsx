export default function WhyChooseUs() {
  const points = [
    {
      icon: "👨‍✈️",
      title: "Experienced Drivers",
      description: "Our professional drivers are well-trained, licensed, and have years of experience navigating Pune's roads safely."
    },
    {
      icon: "🚗",
      title: "Clean & Safe Vehicles",
      description: "Regularly maintained, sanitized vehicles equipped with safety features for your comfort and security."
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden charges. Get upfront pricing with complete transparency. Pay only for what you use."
    },
    {
      icon: "🕐",
      title: "24/7 Availability",
      description: "Round-the-clock service availability. Book your cab anytime, anywhere in Pune and surrounding areas."
    },
  ];

  return (
    <section className="why-choose-us py-16">
      <div className="container">
        <h2 className="why-choose-us__title">
          Why Choose Shankh Cabs
        </h2>
        <p className="why-choose-us__subtitle">
          We are committed to providing you with the best cab service experience
        </p>

        <div className="why-choose-us__grid">
          {points.map((point) => (
            <div key={point.title} className="why-choose-us__card">
              <div className="why-choose-us__icon">{point.icon}</div>
              <h3 className="why-choose-us__card-title">{point.title}</h3>
              <p className="why-choose-us__card-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
