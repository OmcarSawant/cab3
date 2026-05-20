import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import BookingRequestPage from "./pages/BookingRequestPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/booking-request" element={<BookingRequestPage />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}
