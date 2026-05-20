export default function AboutUs() {
    const milestones = [
        { value: "3+", label: "Years of Experience" },
        { value: "5K+", label: "Happy Customers" },
        { value: "10+", label: "Fleet Vehicles" },
        { value: "24/7", label: "Service Availability" },
    ];

    return (
        <section className="about-us">
            <div className="container">
                <div className="about-us__grid">
                    <div className="about-us__content">
                        <span className="section-badge">About Us</span>
                        <h2>Your Trusted Travel Partner in Pune</h2>
                        <p>
                            <strong>Shankh Cabs</strong> has been serving Pune and surrounding regions with reliable,
                            safe, and affordable cab services. From daily city commutes to long-distance outstation
                            trips, we ensure every journey is comfortable and hassle-free.
                        </p>
                        <p>
                            Our mission is simple — provide <em>premium transportation</em> at honest prices
                            with verified drivers and well-maintained vehicles. Whether it's an airport transfer,
                            corporate travel, or a family trip, Shankh Cabs is the name Pune trusts.
                        </p>
                        <div className="about-us__values">
                            <div className="about-us__value">
                                <span className="icon">🎯</span>
                                <div>
                                    <h4>Our Mission</h4>
                                    <p>Deliver safe, punctual, and affordable cab services across Pune.</p>
                                </div>
                            </div>
                            <div className="about-us__value">
                                <span className="icon">👁️</span>
                                <div>
                                    <h4>Our Vision</h4>
                                    <p>Be the most trusted and preferred cab service in Maharashtra.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-us__stats">
                        {milestones.map((item, idx) => (
                            <div key={idx} className="about-us__stat-card">
                                <span className="about-us__stat-value">{item.value}</span>
                                <span className="about-us__stat-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
