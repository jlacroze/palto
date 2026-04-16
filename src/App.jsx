import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";

// 🔥 Lazy load des sections
const About = lazy(() => import("./sections/About/About"));
const Services = lazy(() => import("./sections/Services/Services"));
const Team = lazy(() => import("./sections/Team/Team"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={null}>
        <About />
        <Services />
        <Team />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;