import { useState } from "react";

export default function Coverage() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const coverageAreas = [
    {
      type: "Within Pune City",
      areas: [
        "Hinjewadi", "Baner", "Wakad", "Aundh", "Kothrud",
        "Viman Nagar", "Kharadi", "Hadapsar", "Magarpatta",
        "Koregaon Park", "Camp", "Pune Station", "Swargate"
      ]
    },
    {
      type: "Outstation Routes",
      areas: [
        "Pune To Mahabaleshwar", "Pune To Goa", "Pune To Tuljapur",
        "Pune To Tarkarli Beach", "Pune To Adlabs Imagica",
        "Pune To Trimbakeshwar", "Pune To Nashik", "Pune To Murud Janjira",
        "Pune To Mumbai", "Pune To Ashtavinayak Places Cab",
        "Pune To Pandharpur", "Pune To Kaas Pathar",
        "Pune To Vani Saptashrungi", "Pune To Satara",
        "Pune To Ashtavinayak Darshan",
        "Pune To Ashtavinayak Yatra", "Pune To Bhimashankar Cab",
        "Pune To Ganapatipule", "Pune To Guhagar", "Pune To Kolhapur",
        "Pune To Panhala", "Pune To Ratnagiri",
        "Pune To Aundha Nagnath", "Pune To Bhimashankar Cab Hire",
        "Pune To Ashtavinayak Tour Cab", "Pune To Harihareshwar",
        "Pune To Malshej Ghat", "Pune To Parli Vaijnath",
        "Pune To Sadetin Shakti Peeth",
        "Pune To Sambhaji Nagar", "Pune To Dapoli",
        "Pune To Grishneshwar", "Pune To Igatpuri",
        "Pune To Panchgani", "Pune To Raigad",
        "Pune To Ashtavinayak Cab Services",
        "Pune To Ashtavinayak Bus Booking", "Pune To Rajgad",
        "Pune To Mumbai Cab", "Pune To Alibaug Beach Cab",
        "Mumbai To Ashtavinayak", "Pune To Shirdi",
        "Mumbai To Bhimashankar", "Pune To Navi Mumbai Airport"
      ]
    },
    {
      type: "Airport Services",
      areas: [
        "Pune Airport Pickup/Drop", "Mumbai Airport Transfer",
        "Ahmedabad Airport", "Goa Airport", "All major airports"
      ]
    }
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className="coverage">
      <div className="container">
        <h2>Coverage Areas</h2>
        <p className="coverage__intro">
          We provide cab services across Pune and major cities in Maharashtra
        </p>
        <div className="coverage__dropdown-list">
          {coverageAreas.map((category, index) => (
            <div key={category.type} className={`coverage__dropdown ${openDropdown === index ? 'open' : ''}`}>
              <button
                className="coverage__dropdown-header"
                onClick={() => toggleDropdown(index)}
                aria-expanded={openDropdown === index}
              >
                <span className="coverage__dropdown-title">{category.type}</span>
                <span className={`coverage__dropdown-icon ${openDropdown === index ? 'open' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`coverage__dropdown-content ${openDropdown === index ? 'open' : ''}`}>
                <ul className="coverage__list">
                  {category.areas.map((area, idx) => (
                    <li key={idx} className="coverage__item">📍 {area}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="coverage__note">
          Not listed your area? Contact us - we can arrange services to most locations!
        </p>
      </div>
    </section>
  );
}
