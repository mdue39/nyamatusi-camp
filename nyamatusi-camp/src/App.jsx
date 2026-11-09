import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Activities from "./components/Activities";
import Sightings from "./components/Sightings";
import Itenaries from "./components/Itenaries";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Activities />
      <Sightings />
      <Itenaries />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}