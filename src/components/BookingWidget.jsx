import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingWidget() {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("one-way");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  
  // Get today's date formatted as YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [pickupDate, setPickupDate] = useState(getTodayDate());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fromLocation.trim() || !toLocation.trim()) {
      alert("Please enter both From (Pickup) and To (Drop) locations.");
      return;
    }
    
    // Navigate to SearchResultsPage with search query parameters
    const params = new URLSearchParams({
      pickup: fromLocation.trim(),
      drop: toLocation.trim(),
      date: pickupDate,
      type: tripType
    });
    
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="booking-widget">
      <div className="container">
        <div className="booking-widget__card">
          {/* Trip Type Tabs */}
          <div className="booking-widget__tabs">
            <button
              type="button"
              className={`booking-widget__tab ${tripType === "one-way" ? "active" : ""}`}
              onClick={() => setTripType("one-way")}
            >
              ONE WAY TRIP
            </button>
            <button
              type="button"
              className={`booking-widget__tab ${tripType === "round-trip" ? "active" : ""}`}
              onClick={() => setTripType("round-trip")}
            >
              ROUND TRIP
            </button>
          </div>

          {/* Booking Form */}
          <form className="booking-widget__form" onSubmit={handleSubmit}>
            <div className="booking-widget__field">
              <label htmlFor="from-location">From (Pickup)</label>
              <input
                id="from-location"
                type="text"
                placeholder="Enter pickup location"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                list="widget-locations"
                required
              />
            </div>

            <div className="booking-widget__field">
              <label htmlFor="to-location">To (Drop)</label>
              <input
                id="to-location"
                type="text"
                placeholder="Enter drop location"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                list={tripType === "one-way" ? "widget-locations" : undefined}
                required
              />
            </div>

            <datalist id="widget-locations">
              <option value="Pune" />
              <option value="Pune Airport" />
              <option value="Mumbai" />
              <option value="Mumbai Airport" />
            </datalist>

            <div className="booking-widget__field">
              <label htmlFor="pickup-date">Date</label>
              <input
                id="pickup-date"
                type="date"
                min={getTodayDate()}
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="booking-widget__submit">
              Explore Cabs
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
