import { useState, useRef, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Daily Commuter",
    rating: 5,
    text: "Exceptional service! I book Shankh Cabs for my daily commute to Hinjewadi IT Park. The drivers are extremely professional, the cars are pristine, and they are always on time. Best cab service in Pune!",
    location: "Hinjewadi, Pune",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Sneha Patil",
    role: "Business Traveler",
    rating: 5,
    text: "I frequently travel between Pune and Mumbai for business meetings. Shankh Cabs' outstation service is top-notch. Clean cars, safe driving, and highly reasonable rates. The booking process is very smooth.",
    location: "Kothrud, Pune",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    role: "Frequent Flyer",
    rating: 5,
    text: "Reliable airport drops even at midnight. The booking process was seamless, and the driver was waiting for me before the scheduled time. Truly a hassle-free cab experience in Pune.",
    location: "Viman Nagar, Pune",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Priya Joshi",
    role: "Family Organizer",
    rating: 5,
    text: "Booked a cab for a full-day family trip around Pune's local sights. The driver was exceptionally polite, guided us patiently, and knew all the best routes. It made our day wonderful!",
    location: "Hadapsar, Pune",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Corporate Client",
    rating: 5,
    text: "Excellent experience. Clean interiors, smooth ride, and transparent billing. By far the most dependable corporate cab service provider in Pune. The team is extremely responsive.",
    location: "Baner, Pune",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to center-ish card
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const trackRef = useRef(null);

  const total = testimonials.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Drag and Swipe Handlers
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If swipe distance is greater than 50px, switch slides
    if (dragOffset > 60) {
      handlePrev();
    } else if (dragOffset < -60) {
      handleNext();
    }
    setDragOffset(0);
  };

  // Mouse drag handlers
  const onMouseDown = (e) => {
    handleStart(e.clientX);
    // Prevent image dragging/highlighting text during swipe
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    handleMove(e.clientX);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  // Click on adjacent cards directly to center them
  const handleCardClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Set drag variables dynamically in inline style for smooth 60fps tracking
  const trackStyle = {
    transform: `translateX(calc(50% - (${activeIndex} * (var(--card-width) + var(--card-gap))) - (var(--card-width) / 2) + ${dragOffset}px))`,
    transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
  };

  return (
    <section className="testimonials py-20" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="testimonials__tag">TESTIMONIALS</span>
          <h2 className="testimonials__title">What Our Customers Say</h2>
          <div className="testimonials__line"></div>
          <p className="testimonials__subtitle">
            Read real stories from our regular commuters, outstation travelers, and corporate clients in Pune.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className={`testimonials__carousel ${isDragging ? "dragging" : ""}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={handleEnd}
        >
          <div 
            className="testimonials__track" 
            style={trackStyle}
            ref={trackRef}
          >
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              const isLeft = index === (activeIndex - 1 + total) % total;
              const isRight = index === (activeIndex + 1) % total;
              
              let statusClass = "other";
              if (isActive) statusClass = "active";
              else if (isLeft) statusClass = "left";
              else if (isRight) statusClass = "right";

              return (
                <div
                  key={item.id}
                  className={`testimonial-card ${statusClass}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="testimonial-card__quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <div className="testimonial-card__rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <p className="testimonial-card__text">"{item.text}"</p>
                  <div className="testimonial-card__footer">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="testimonial-card__avatar"
                      loading="lazy"
                    />
                    <div className="testimonial-card__info">
                      <h4 className="testimonial-card__name">{item.name}</h4>
                      <span className="testimonial-card__role">{item.role}</span>
                      <span className="testimonial-card__location">{item.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="testimonials__controls">
          <button 
            className="testimonials__btn testimonials__btn--prev" 
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            className="testimonials__btn testimonials__btn--next" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
