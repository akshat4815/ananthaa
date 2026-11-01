import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CountryMarquee from '../components/CountryMarquee';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Stats from '../components/Stats';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import PaymentGateways from '../components/PaymentGateways';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CountryMarquee />
      <About />
      <Services />
      <Products />
      <Stats />
      <Certifications />
      <Testimonials />
      <PaymentGateways />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
