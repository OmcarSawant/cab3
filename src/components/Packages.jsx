import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaCar, FaClock, FaRoute, FaCheck, FaTimes, FaWhatsapp, FaArrowRight } from "react-icons/fa";

const packagesData = [
  {
    id: "pune-mumbai-airport",
    title: "Pune to Mumbai Airport",
    category: "airport",
    distance: "160 Km",
    duration: "3.5 Hours",
    description: "Reliable transfer to Chhatrapati Shivaji Maharaj International Airport (CSMIA) in Mumbai. Timely pickups and professional drivers guaranteed.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Mumbai Airport",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹2,500", type: "One Way" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹3,500", type: "One Way" },
      { car: "Innova", capacity: "7 Pax", price: "₹5,000", type: "One Way" }
    ],
    inclusions: ["AC Vehicle", "Professional Driver", "Fuel Charges", "Expressway Toll Tax", "24/7 Customer Support"],
    exclusions: ["Airport Parking Fees (approx ₹150)", "Extra pickups or drops (₹300/stop)", "Night driving charges if applicable"]
  },
  {
    id: "pune-mumbai-darshan",
    title: "Pune to Mumbai Darshan",
    category: "sightseeing",
    distance: "380 Km (Round Trip)",
    duration: "14 Hours",
    description: "Explore the dream city Mumbai. Covers Gateway of India, Marine Drive, Siddhivinayak, Haji Ali, Juhu Beach, and Bandra-Worli Sea Link.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Mumbai Darshan",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹4,000", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹5,500", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹7,500", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Professional Driver Allowance", "Fuel Charges", "Expressway Toll Tax", "Local City Tolls"],
    exclusions: ["Parking charges at tour spots", "State Entry tax if applicable", "Monument entry tickets"]
  },
  {
    id: "pune-to-mumbai-cab",
    title: "Pune to Mumbai Cab Service",
    category: "outstation",
    distance: "150 Km",
    duration: "3 Hours",
    description: "Affordable one-way or round-trip travel between Pune and Mumbai city. Direct doorstep pickup and drop-off with clean cabs.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Mumbai",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹2,500", type: "One Way" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹3,500", type: "One Way" },
      { car: "Innova", capacity: "7 Pax", price: "₹5,000", type: "One Way" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "Toll Taxes", "Passenger Luggage space"],
    exclusions: ["Parking fees inside Mumbai", "Extra hour/km usage rates", "Night driving charges"]
  },
  {
    id: "pune-bhimashankar",
    title: "Pune to Bhimashankar Cab Service",
    category: "religious",
    distance: "120 Km",
    duration: "3.5 Hours",
    description: "Pilgrimage to the holy Bhimashankar Temple, one of the 12 sacred Jyotirlingas, nestled in the scenic Western Ghats.",
    image: "https://www.trawell.in/admin/images/upload/263971748Pune_Bhimshankar_Main.jpg",
    from: "Pune",
    to: "Bhimashankar Temple",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹3,500", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹4,500", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹6,000", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "State & Local Toll Taxes", "Doorstep pickup/drop"],
    exclusions: ["Temple VIP darshan tickets", "Parking charges at the temple", "Driver food / overnight stay"]
  },
  {
    id: "pune-ashtavinayak",
    title: "Pune to Ashtavinayak Tour",
    category: "religious",
    distance: "650 Km (Round Trip)",
    duration: "2 Days",
    description: "Sacred tour covering all 8 historic temples of Lord Ganesha in Maharashtra. Ideal pilgrimage package for families.",
    image: "https://memorableindia.com/wp-content/uploads/2020/10/Ashtavinayak-Temple-Lord-Ganesha-Swayambhu-Temple.jpg",
    from: "Pune",
    to: "Ashtavinayak (8 Temples)",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹7,500", type: "2-Day Package" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹9,500", type: "2-Day Package" },
      { car: "Innova", capacity: "7 Pax", price: "₹13,000", type: "2-Day Package" }
    ],
    inclusions: ["AC Vehicle for 2 Days", "Driver Allowance & Night Charges", "Fuel Charges", "All Toll taxes"],
    exclusions: ["Hotel Accommodation", "Food & Meals", "Temple parking charges", "VIP Pooja fees"]
  },
  {
    id: "pune-mahabaleshwar",
    title: "Pune to Mahabaleshwar Tour",
    category: "hillstation",
    distance: "125 Km",
    duration: "3.5 Hours",
    description: "Enjoy strawberries and gorgeous view points in Mahabaleshwar and Panchgani. Clean air, waterfalls, and lake boating await.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Mahabaleshwar",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹3,500", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹4,500", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹6,000", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "Tolls & Local Municipal taxes"],
    exclusions: ["Boating charges at Venna Lake", "Mapro Garden entry / personal shopping", "Hotel stay / food"]
  },
  {
    id: "pune-shirdi",
    title: "Pune to Shirdi & Shani Shingnapur",
    category: "religious",
    distance: "200 Km",
    duration: "4.5 Hours",
    description: "Seek blessings at the holy shrine of Sai Baba in Shirdi and visit the unique doorless village of Shani Shingnapur.",
    image: "https://shirditourism.co.in/images/v2/places-to-visit/gurusthan-header-shirdi-tourism.jpg",
    from: "Pune",
    to: "Shirdi / Shani Shingnapur",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹4,500", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹5,800", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹8,000", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "All Toll taxes"],
    exclusions: ["Shirdi Sansthan Darshan pass", "Parking fees", "Accommodation / meals"]
  },
  {
    id: "pune-5-jyotirling",
    title: "Pune to 5 Jyotirling",
    category: "religious",
    distance: "1200 Km (Round Trip)",
    duration: "4 Days",
    description: "A divine tour to Maharashtra's 5 Jyotirlingas: Bhimashankar, Trimbakeshwar, Grishneshwar, Aundha Nagnath, and Parli Vaijnath.",
    image: "https://images.unsplash.com/photo-1616038242814-a6eac7845d88?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "5 Jyotirlingas",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹18,000", type: "4-Day Tour" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹24,000", type: "4-Day Tour" },
      { car: "Innova", capacity: "7 Pax", price: "₹32,000", type: "4-Day Tour" }
    ],
    inclusions: ["AC Vehicle for 4 Days", "Driver Night Allowances", "Fuel Charges", "State Taxes & Tolls"],
    exclusions: ["Hotels / Lodging", "Food expenses", "VIP temple entry passes", "Parking at shrines"]
  },
  {
    id: "pune-goa",
    title: "Pune to Goa Package",
    category: "outstation",
    distance: "450 Km",
    duration: "9 Hours",
    description: "Road trip to India's favorite beach destination. Safely travel to North or South Goa in extreme comfort and luxury.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Goa (North/South)",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹12,000", type: "One Way" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹16,000", type: "One Way" },
      { car: "Innova", capacity: "7 Pax", price: "₹22,000", type: "One Way" }
    ],
    inclusions: ["AC Vehicle", "Driver outstation allowance", "Fuel Charges", "State Tolls", "Luggage Carrier"],
    exclusions: ["Goa Entry Border Tax (approx ₹500)", "Local Goan city parking fees", "Driver food / stay for round trips"]
  },
  {
    id: "pune-lavasa",
    title: "Pune to Lavasa Day Trip",
    category: "hillstation",
    distance: "60 Km",
    duration: "2 Hours",
    description: "Visit the planned Italian-style lakeside town Lavasa. Perfect quick holiday for families and couples.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Lavasa",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹2,000", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹2,800", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹4,000", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "Tolls", "Doorstep pickup/drop"],
    exclusions: ["Lavasa entry parking charges (approx ₹200)", "Food & personal expenses"]
  },
  {
    id: "pune-nashik",
    title: "Pune to Nashik Cab Service",
    category: "outstation",
    distance: "210 Km",
    duration: "4.5 Hours",
    description: "Travel to India's Wine Capital and visit Panchavati temples, Trimbakeshwar Jyotirlinga, and world-class vineyards.",
    image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Nashik",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹4,500", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹5,800", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹8,000", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel", "All National Highways Toll Taxes"],
    exclusions: ["Vineyard entry and wine tasting fees", "Local temple parking", "Meals"]
  },
  {
    id: "pune-aurangabad",
    title: "Pune to Aurangabad Tour",
    category: "sightseeing",
    distance: "240 Km",
    duration: "5 Hours",
    description: "Visit historical monuments, including the Ajanta & Ellora caves (UNESCO sites) and Bibi Ka Maqbara.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg",
    from: "Pune",
    to: "Aurangabad / Ellora",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹5,500", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹7,000", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹9,500", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "All highway toll charges"],
    exclusions: ["Cave entry tickets", "Tour guide fees", "Parking at monuments", "Hotels"]
  },
  {
    id: "pune-lonavla",
    title: "Pune to Lonavla & Khandala",
    category: "hillstation",
    distance: "65 Km",
    duration: "1.5 Hours",
    description: "Scenic getaway covering Tiger Point, Bhushi Dam, Karla Caves, Wax Museum, and local Chikki shopping lanes.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Lonavla",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹2,200", type: "One Way" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹3,000", type: "One Way" },
      { car: "Innova", capacity: "7 Pax", price: "₹4,500", type: "One Way" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "Tolls & Local Municipal taxes"],
    exclusions: ["Parking charges at spots", "Activity ticket fees"]
  },
  {
    id: "pune-solapur",
    title: "Pune to Solapur Cab Service",
    category: "outstation",
    distance: "250 Km",
    duration: "5 Hours",
    description: "Travel smoothly to Solapur. Visit the famous Solapur Fort, Great Indian Bustard Sanctuary, and Siddheshwar Temple.",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Solapur",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹5,000", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹6,500", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹9,000", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel", "All Toll taxes"],
    exclusions: ["Parking fees at temples/spot", "Night driving charges if travel exceeds 10 PM"]
  },
  {
    id: "pune-kolhapur",
    title: "Pune to Kolhapur Cab Service",
    category: "outstation",
    distance: "230 Km",
    duration: "4.5 Hours",
    description: "Travel to the historical city of Kolhapur. Seek blessings at Mahalakshmi Temple and taste famous Kolhapuri cuisine.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mahalaxmi_Temple%2C_Kolhapur.jpg/1280px-Mahalaxmi_Temple%2C_Kolhapur.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    from: "Pune",
    to: "Kolhapur",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹5,000", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹6,500", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹9,000", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "All Highway Tolls"],
    exclusions: ["Mahalakshmi temple parking", "Personal shopping (Kolhapuri chappals / food)"]
  },
  {
    id: "pune-local-airport",
    title: "Pune Airport (Pick/Drop)",
    category: "airport",
    distance: "Local City",
    duration: "Depends on Location",
    description: "Hassle-free, guaranteed on-time pickups and drop-offs to Pune Lohegaon Airport from any location in Pune.",
    image: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?w=500&auto=format&fit=crop&q=80",
    from: "Local Pune",
    to: "Pune Airport (PNQ)",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹900", type: "One Way" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹1,400", type: "One Way" },
      { car: "Innova", capacity: "7 Pax", price: "₹2,200", type: "One Way" }
    ],
    inclusions: ["AC Vehicle", "Driver city allowance", "Fuel", "Tolls if applicable"],
    exclusions: ["Airport entry ticket / parking (₹100)", "Waiting charges after 45 mins of flight arrival"]
  },
  {
    id: "pune-matheran",
    title: "Pune to Matheran Tour",
    category: "hillstation",
    distance: "120 Km",
    duration: "3.5 Hours",
    description: "Visit Asia's only automobile-free hill station Matheran. Travel to Dasturi Naka with beautiful valley scenery.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80",
    from: "Pune",
    to: "Matheran (Dasturi Naka)",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹3,200", type: "Round Trip" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹4,200", type: "Round Trip" },
      { car: "Innova", capacity: "7 Pax", price: "₹5,800", type: "Round Trip" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel Charges", "All Toll taxes"],
    exclusions: ["Matheran Entry Fees (Capitation tax)", "Toy train / horse / hand-pulled rickshaw charges", "Dasturi Naka Parking"]
  },
  {
    id: "mumbai-airport-pune",
    title: "Mumbai Airport to Pune",
    category: "airport",
    distance: "160 Km",
    duration: "3.5 Hours",
    description: "Pick-up from Mumbai International Airport T2/T1 with drop-off directly to your home in Pune. Fly easy, drive safe.",
    image: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?w=500&auto=format&fit=crop&q=80",
    from: "Mumbai Airport",
    to: "Pune",
    pricing: [
      { car: "Sedan (Dzire / Aura)", capacity: "4 Pax", price: "₹2,500", type: "One Way" },
      { car: "Ertiga SUV", capacity: "6 Pax", price: "₹3,500", type: "One Way" },
      { car: "Innova", capacity: "7 Pax", price: "₹5,000", type: "One Way" }
    ],
    inclusions: ["AC Vehicle", "Driver Allowance", "Fuel", "Expressway Toll Taxes"],
    exclusions: ["Airport Parking charges during pickup", "Multi pickup stops in Pune"]
  }
];

export default function Packages() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePackage, setActivePackage] = useState(null);

  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBookNow = (pkg, selectedCar = "") => {
    // Prefill data and navigate to the booking request page
    navigate("/booking-request", {
      state: {
        from: pkg.from,
        to: pkg.to,
        additionalRequest: `I want to book the "${pkg.title}" package. Selected Vehicle: ${selectedCar || "Sedan"}. Please share availability and exact quotation.`
      }
    });
    // Close modal if open
    setActivePackage(null);
  };

  const handleWhatsAppBooking = (pkg, selectedCar = "Sedan", price = "") => {
    const text = `Hi Shankh Cabs! I would like to book the *${pkg.title}* package.\n- *Vehicle:* ${selectedCar}\n- *Price:* ${price || "Starting Rates"}\n- *From:* ${pkg.from}\n- *To:* ${pkg.to}\nPlease confirm availability. Thank you!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917758919483?text=${encoded}`, "_blank");
  };

  // Filter & Search Logic
  const filteredPackages = packagesData.filter((pkg) => {
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.to.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: "all", label: "All Packages" },
    { id: "airport", label: "Airport Transfers" },
    { id: "religious", label: "Religious Pilgrimages" },
    { id: "hillstation", label: "Hill Stations" },
    { id: "outstation", label: "Outstation Trips" },
    { id: "sightseeing", label: "Sightseeing Tours" }
  ];

  return (
    <section className="packages py-20" id="packages">
      <div className="container">
        {/* Section Header */}
        <div className="packages__header">
          <span className="packages__tag">OUR FEATURED PACKAGES</span>
          <h2 className="packages__title">Best Cab Packages In Pune</h2>
          <div className="packages__line"></div>
          <p className="packages__subtitle">
            Explore Pune's most reliable and affordable outstation, airport, and sightseeing cab packages with transparent pricing.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="packages__filter-bar">
          <div className="packages__search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search destination (e.g. Mumbai, Shirdi, Goa...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="packages__tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`packages__tab ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="packages__grid">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-card__image-container">
                  <img src={pkg.image} alt={pkg.title} className="package-card__image" loading="lazy" />
                  <div className="package-card__category">{pkg.category.toUpperCase()}</div>
                </div>
                <div className="package-card__body">
                  <h3 className="package-card__title">{pkg.title}</h3>
                  <p className="package-card__description">{pkg.description}</p>

                  <div className="package-card__stats">
                    <div className="stat">
                      <FaRoute /> <span>{pkg.distance}</span>
                    </div>
                    <div className="stat">
                      <FaClock /> <span>{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="package-card__pricing-preview">
                    <span className="label">Starting From</span>
                    <span className="price">{pkg.pricing[0].price}</span>
                    <span className="suffix">({pkg.pricing[0].car})</span>
                  </div>

                  <div className="package-card__actions">
                    <button
                      className="btn btn--details"
                      onClick={() => setActivePackage(pkg)}
                    >
                      View Package Details
                    </button>
                    <button
                      className="btn btn--whatsapp-icon"
                      onClick={() => handleWhatsAppBooking(pkg, pkg.pricing[0].car, pkg.pricing[0].price)}
                      aria-label="Book on WhatsApp"
                    >
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="packages__empty">
              <h3>No packages found matching your search.</h3>
              <p>Try searching for another destination or adjust your filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Package Detail Modal Overlay */}
      {activePackage && (
        <div className="package-modal">
          <div className="package-modal__backdrop" onClick={() => setActivePackage(null)}></div>
          <div className="package-modal__content">
            <button className="package-modal__close" onClick={() => setActivePackage(null)}>
              <FaTimes />
            </button>

            <div className="package-modal__layout">
              {/* Modal Left / Images & Description */}
              <div className="package-modal__visual">
                <img src={activePackage.image} alt={activePackage.title} className="package-modal__img" />
                <div className="package-modal__details">
                  <span className="modal-tag">{activePackage.category.toUpperCase()}</span>
                  <h2>{activePackage.title}</h2>
                  <p className="description">{activePackage.description}</p>

                  <div className="quick-stats">
                    <div className="quick-stat">
                      <FaRoute /> <div><strong>Distance:</strong> {activePackage.distance}</div>
                    </div>
                    <div className="quick-stat">
                      <FaClock /> <div><strong>Duration:</strong> {activePackage.duration}</div>
                    </div>
                  </div>

                  <div className="checks-list">
                    <div className="check-block">
                      <h4>What's Included:</h4>
                      <ul>
                        {activePackage.inclusions.map((inc, i) => (
                          <li key={i}><FaCheck className="check-icon" /> {inc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="check-block">
                      <h4>What's Excluded:</h4>
                      <ul>
                        {activePackage.exclusions.map((exc, i) => (
                          <li key={i}><FaTimes className="cross-icon" /> {exc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Right / Pricing & Form */}
              <div className="package-modal__pricing-table">
                <h3>Select Vehicle & Pricing</h3>
                <p className="pricing-sub">Doorstep pickup & drop-off. Prices are transparent with no hidden fees.</p>

                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Vehicle Type</th>
                        <th>Capacity</th>
                        <th>Rate</th>
                        <th>Booking</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activePackage.pricing.map((rate, i) => (
                        <tr key={i}>
                          <td className="vehicle-name">
                            <FaCar className="car-icon" /> {rate.car}
                          </td>
                          <td className="capacity">{rate.capacity}</td>
                          <td className="rate-val"><strong>{rate.price}</strong> <span className="rate-type">({rate.type})</span></td>
                          <td>
                            <div className="table-actions">
                              <button
                                className="table-btn table-btn--whatsapp"
                                onClick={() => handleWhatsAppBooking(activePackage, rate.car, rate.price)}
                                title="Book via WhatsApp"
                              >
                                <FaWhatsapp />
                              </button>
                              <button
                                className="table-btn table-btn--online"
                                onClick={() => handleBookNow(activePackage, rate.car)}
                                title="Book Online Now"
                              >
                                Book
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="modal-cta-box">
                  <h4>Need Custom Sightseeing or Large Group Bookings?</h4>
                  <p>Speak to our Pune travel desk representative directly for custom route rates, corporate packages, and discounts.</p>
                  <div className="cta-buttons">
                    <a href="tel:+917758919483" className="btn-call">Call Representative</a>
                    <button className="btn-online-detailed" onClick={() => handleBookNow(activePackage)}>
                      Submit Detailed Booking Form <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
