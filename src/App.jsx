import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About"; // ✅ important = pas lazy

const Services = lazy(() => import("./sections/Services/Services"));
const Team = lazy(() => import("./sections/Team/Team"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Suspense fallback={<div style={{ height: "200px" }} />}>
        <Services />
        <Team />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;