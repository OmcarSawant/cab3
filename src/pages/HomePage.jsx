import Hero from "../components/Hero";
import BookingWidget from "../components/BookingWidget";
import StatsShowcase from "../components/StatsShowcase";
import Services from "../components/Services";
import Packages from "../components/Packages";
import WhyChooseUs from "../components/WhyChooseUs";
import Fleet from "../components/Fleet";
import Coverage from "../components/Coverage";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Map from "../components/Map";

export default function HomePage() {
    return (
        <main className="max-w-7xl mx-auto px-4 container-main">
            <section id="home">
                <Hero />
                <BookingWidget />
                <StatsShowcase />
            </section>
            <section id="services"><Services /></section>
            <section id="packages"><Packages /></section>
            <section id="coverage"><Coverage /></section>
            <section id="why-choose-us"><WhyChooseUs /></section>
            <section id="fleet"><Fleet /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="contact"><Contact /></section>
            <Map />
        </main>
    );
}
