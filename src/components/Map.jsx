export default function Map() {
    const locations = [
        {
            title: "Shankh Cabs Services",
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.7652632!3d18.6420436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9002b123d81%3A0xecb78194556afa49!2sShankh%20Cabs%20Services!5e0!3m2!1sen!2sin!4v1716048000000!5m2!1sen!2sin"
        }
    ];

    return (
        <section id="map" className="map-section">
            <div className="container">
                <h2>Find Us</h2>
                <div className="maps-grid">
                    {locations.map((loc, index) => (
                        <div key={index} className="map-item">
                            <h3>{loc.title}</h3>
                            <div className="map-container">
                                <iframe
                                    src={loc.src}
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={loc.title}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
