import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import sedan from "../assets/sedan-removebg-preview.png";
import suv from "../assets/suv-removebg-preview.png";
import traveller from "../assets/traveller-removebg-preview.png";

const vehicles = [
    {
        name: "Sedan",
        image: sedan,
        seats: "4 Seats",
        capacity: "4 passengers",
        examples: "Dzire, Aura, Etios",
        price: "Starting ₹11/km",
        ratePerKm: "₹11 / km",
        driverAllowance: "₹300 / Day",
        exclusions: "Tolls, Parking, & State Taxes not included (to be paid at actuals)",
        ideal: "Comfortable city & outstation",
        features: ["AC", "4 Seats", "Music System", "Luggage: 3 Bags"],
    },
    {
        name: "SUV",
        image: suv,
        seats: "6-7 Seats",
        capacity: "6-7 passengers",
        examples: "Ertiga",
        price: "Starting ₹15/km",
        ratePerKm: "₹15 / km",
        driverAllowance: "₹300 / Day",
        exclusions: "Tolls, Parking, & State Taxes not included (to be paid at actuals)",
        ideal: "Family trips, long journeys",
        features: ["AC", "6-7 Seats", "Music System", "Luggage: 4 Bags"],
    },
    {
        name: "Traveller",
        image: traveller,
        seats: "13/17/20 Seats",
        capacity: "Up to 20 passengers",
        examples: "Force Traveller",
        price: "Starting ₹22/km",
        ratePerKm: "₹22 / km",
        driverAllowance: "₹400 / Day",
        exclusions: "Tolls, Parking, & State Taxes not included (to be paid at actuals)",
        ideal: "Group trips, pilgrimages, tours",
        features: ["AC", "13-20 Seats", "Music System", "Large Luggage Space"],
    },
];

export default function SearchResultsPage() {
    const [searchParams] = useSearchParams();
    const pickup = searchParams.get("pickup") || "";
    const drop = searchParams.get("drop") || "";
    const date = searchParams.get("date") || "";
    const time = searchParams.get("time") || "";
    const tripType = searchParams.get("type") || "one-way";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (d) => {
        if (!d) return "";
        const date = new Date(d);
        return date.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <main className="search-results">
            <div className="container">
                {/* Trip Summary */}
                <div className="search-results__summary">
                    <Link to="/" className="search-results__back">← Back to Home</Link>
                    <h1>Available Cabs & Rates</h1>
                    {(pickup || drop) && (
                        <div className="search-results__trip-info">
                            <span className="search-results__trip-badge">{tripType.replace("-", " ").toUpperCase()}</span>
                            {pickup && <span>📍 {pickup}</span>}
                            {pickup && drop && <span className="search-results__arrow">→</span>}
                            {drop && <span>📌 {drop}</span>}
                            {date && <span>📅 {formatDate(date)}</span>}
                            {time && <span>⏰ {time}</span>}
                        </div>
                    )}
                </div>

                {/* Vehicle Cards */}
                <div className="search-results__grid">
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.name} className="search-results__card">
                            <div className="search-results__card-image">
                                <img src={vehicle.image} alt={vehicle.name} />
                                <span className="search-results__seats-badge">{vehicle.seats}</span>
                            </div>
                            <div className="search-results__card-body">
                                <div className="search-results__card-header">
                                    <h3>{vehicle.name}</h3>
                                    <span className="search-results__price">{vehicle.price}</span>
                                </div>
                                <p className="search-results__examples">{vehicle.examples}</p>
                                <p className="search-results__ideal">Best for: {vehicle.ideal}</p>
                                
                                {/* Pricing Details Breakdown */}
                                <div className="search-results__pricing-breakdown">
                                    <div className="search-results__pricing-item">
                                        <span className="icon">💰</span>
                                        <div>
                                            <strong>Rate per Km:</strong>
                                            <span> {vehicle.ratePerKm}</span>
                                        </div>
                                    </div>
                                    <div className="search-results__pricing-item">
                                        <span className="icon">👤</span>
                                        <div>
                                            <strong>Driver Allowance:</strong>
                                            <span> {vehicle.driverAllowance}</span>
                                        </div>
                                    </div>
                                    <div className="search-results__pricing-item exclusions">
                                        <span className="icon">⚠️</span>
                                        <div>
                                            <strong>Exclusions:</strong>
                                            <span> {vehicle.exclusions}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="search-results__features">
                                    {vehicle.features.map((f, i) => (
                                        <span key={i} className="search-results__feature-tag">✓ {f}</span>
                                    ))}
                                </div>
                                <div className="search-results__card-actions">
                                    <a href="tel:+917758919483" className="search-results__book-btn">
                                        Book Now
                                    </a>
                                    <a
                                        href={`https://wa.me/917758919483?text=Hi, I want to book a ${vehicle.name}${pickup ? ` from ${pickup}` : ""}${drop ? ` to ${drop}` : ""}${date ? ` on ${formatDate(date)}` : ""}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="search-results__whatsapp-btn"
                                    >
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
