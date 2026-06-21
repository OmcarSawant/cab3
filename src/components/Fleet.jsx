import sedan from "../assets/sedan.png";
import suv from "../assets/suv.png";
import traveller from "../assets/traveller.png";
import innova from "../assets/innova.png";

export default function Fleet() {
  const vehicles = [
    {
      name: "Sedan",
      image: sedan,
      seats: "4 Seats",
      capacity: "4 passengers",
      examples: "Dzire , Aura",
      price: "Moderate pricing",
      ideal: "Comfortable city & outstation"
    },
    {
      name: "Ertiga SUV",
      image: suv,
      seats: "6 Seats",
      capacity: "6 passengers",
      examples: "Ertiga",
      price: "Starting ₹15/km",
      ideal: "Family trips, budget travel"
    },
    {
      name: "Toyota Innova",
      image: innova,
      seats: "7 Seats",
      capacity: "7 passengers",
      examples: "Innova Crysta",
      price: "Starting ₹22/km",
      ideal: "Family trips, premium comfort"
    },
    {
      name: "Traveller",
      image: traveller,
      seats: "13/17/20 Seats",
      capacity: "20 passengers",
      examples: "Force traveller",
      price: "Competitive rates",
      ideal: "Group trips , long tours"
    }
  ];

  return (
    <section className="fleet">
      <div className="container">
        <h2>Our Fleet</h2>
        <p className="fleet__intro">
          Choose from our wide range of well-maintained vehicles to suit your needs
        </p>
        <div className="fleet__grid">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="fleet__card">
              <div className="fleet__image-container">
                <img src={vehicle.image} alt={vehicle.name} className="fleet__image" />
                <span className="fleet__seats-badge">{vehicle.seats}</span>
              </div>
              <h3 className="fleet__name">{vehicle.name}</h3>
              <div className="fleet__details">
                <p><strong>Capacity:</strong> {vehicle.capacity}</p>
                <p><strong>Examples:</strong> {vehicle.examples}</p>
                <p><strong>Best for:</strong> {vehicle.ideal}</p>
                <p className="fleet__price">{vehicle.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
