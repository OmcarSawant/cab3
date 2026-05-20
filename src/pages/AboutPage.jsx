import { useEffect } from "react";
import AboutUs from "../components/AboutUs";

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="max-w-7xl mx-auto px-4 container-main">
            <AboutUs />
        </main>
    );
}
