import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Branch from "./components/Branch.jsx";
import Signal from "./components/Signal.jsx";
import Mission from "./components/Mission.jsx";
import Events from "./components/Events.jsx";
import TeamSection from "./components/TeamSection.jsx";
import Cta from "./components/Cta.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Branch />
        <Signal />
        <Mission />
        <Events />
        <TeamSection />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
