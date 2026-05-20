import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BookingRequestPage() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    from: "",
    to: "",
    date: "",
    additionalRequest: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Retrieve EmailJS credentials from environment
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Check if actual keys have been set up
  const isConfigured = 
    serviceId && serviceId !== "your_service_id_here" &&
    templateId && templateId !== "your_template_id_here" &&
    publicKey && publicKey !== "your_public_key_here";

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state) {
      setFormData((prev) => ({
        ...prev,
        from: location.state.from || "",
        to: location.state.to || "",
        additionalRequest: location.state.additionalRequest || "",
      }));
    }
  }, [location.state]);

  // Get today's date formatted as YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg("");

    // If keys are placeholders, run in simulated/test mode for flawless visual testing
    if (!isConfigured) {
      console.warn("EmailJS is not configured yet. Running submission in simulated/test mode.");
      setTimeout(() => {
        setIsSending(false);
        setIsSubmitted(true);
      }, 1000);
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            contact: formData.contact,
            email: formData.email,
            from_loc: formData.from,
            to_loc: formData.to,
            date: formData.date,
            message: formData.additionalRequest || "None"
          }
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errText = await response.text();
        throw new Error(errText || "Failed to send email request through EmailJS.");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMsg(err.message || "Something went wrong sending the request. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="booking-request">
      <div className="container">
        <div className="booking-request__card">
          {!isSubmitted ? (
            <>
              <h1>Submit Booking Request</h1>
              <p className="booking-request__subtitle">
                Fill out the form below to send your booking request directly to our team.
              </p>

              {/* Developer Helper Banner if keys are placeholders */}
              {!isConfigured && (
                <div style={{
                  background: "rgba(224, 144, 36, 0.1)",
                  border: "1px solid #e09024",
                  color: "#d07c14",
                  padding: "14px 18px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  lineHeight: "1.5",
                  marginBottom: "24px",
                  textAlign: "left"
                }}>
                  💡 <strong>EmailJS Setup:</strong> To enable live email delivery to your inbox, replace the placeholder credentials in your root <code>.env</code> file.
                  <br />
                  <span style={{ fontSize: "0.85rem", opacity: 0.85 }}>
                    <em>* Note: Submitting now will run a local simulated submission (mock) so you can test the user interface.</em>
                  </span>
                </div>
              )}

              {errorMsg && (
                <div style={{
                  background: "rgba(229, 62, 62, 0.1)",
                  border: "1px solid #e53e3e",
                  color: "#e53e3e",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  marginBottom: "20px",
                  textAlign: "center"
                }}>
                  ⚠️ {errorMsg}
                </div>
              )}
              
              <form className="booking-request__form" onSubmit={handleSubmit}>
                {/* Honeypot field to prevent spam */}
                <input type="text" name="_honey" style={{ display: "none" }} readOnly />

                {/* Name Field */}
                <div className="booking-request__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>

                {/* Contact and Email Row */}
                <div className="booking-request__row">
                  <div className="booking-request__field">
                    <label htmlFor="contact">Contact Number</label>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      placeholder="Enter your contact number"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  </div>

                  <div className="booking-request__field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  </div>
                </div>

                {/* From and To Row */}
                <div className="booking-request__row">
                  <div className="booking-request__field">
                    <label htmlFor="from">From (Pickup)</label>
                    <input
                      id="from"
                      name="from"
                      type="text"
                      placeholder="Enter pickup location"
                      value={formData.from}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  </div>

                  <div className="booking-request__field">
                    <label htmlFor="to">To (Drop)</label>
                    <input
                      id="to"
                      name="to"
                      type="text"
                      placeholder="Enter drop location"
                      value={formData.to}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  </div>
                </div>

                {/* Date Picker */}
                <div className="booking-request__field">
                  <label htmlFor="date">Pickup Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={getTodayDate()}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>

                {/* Additional Request TextBox */}
                <div className="booking-request__field">
                  <label htmlFor="additionalRequest">Additional Request (Optional)</label>
                  <textarea
                    id="additionalRequest"
                    name="additionalRequest"
                    placeholder="Describe any special instructions, package needs, round trip requirements, or vehicle preferences..."
                    value={formData.additionalRequest}
                    onChange={handleChange}
                    disabled={isSending}
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="booking-request__submit" 
                  disabled={isSending}
                  style={{
                    opacity: isSending ? 0.7 : 1,
                    cursor: isSending ? "not-allowed" : "pointer"
                  }}
                >
                  {isSending ? "Sending Request..." : "Submit Request"}
                </button>
              </form>
            </>
          ) : (
            <div className="booking-request__success">
              <span className="success-icon">✅</span>
              <h2>Request Submitted Successfully!</h2>
              <p>
                Thank you! Your booking request has been sent directly to our team.
                <br />
                We will check details and contact you shortly to confirm your booking.
              </p>
              
              <div className="actions">
                <Link to="/" className="btn btn--primary">
                  Back to Home
                </Link>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="btn btn--secondary"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
