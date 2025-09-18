import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Gallery from "./components/Gallery";
import Company from "./components/Company";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Education />
      <WorkExperience />
      <Gallery />
      <Company />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
