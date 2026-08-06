import Hero from "./Hero";
import About from "./About";
import ServiceSol from "./ServiceSol";
import ProductsSol from "./ProductsSol";
import SolarServices from "./SolarServices";
import Infrastructure from "./Infrastructure";
import Enquiry from "./Enquiry";

function HomePage() {
    return (
        <>
            <section id="home">
                <Hero />
            </section>

            <section id="about" data-aos="fade-up">
                <About />
            </section>

            <section id="products" data-aos="fade-left">
                <ProductsSol />
            </section>

            <section id="services" data-aos="fade-right">
                <ServiceSol />
            </section>

            <section id="solar" data-aos="fade-up">
                <SolarServices />
            </section>

            <section id="infrastructure" data-aos="fade-up">
                <Infrastructure />
            </section>

            <section id="contact">
                <Enquiry />
            </section>
        </>
    );
}

export default HomePage;