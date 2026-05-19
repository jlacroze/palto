import { lazy, Suspense, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import CookieBanner from "./components/CookieBanner/CookieBanner";
import LegalModal from "./components/LegalModal/LegalModal";

const Services = lazy(() => import("./sections/Services/Services"));
const Team = lazy(() => import("./sections/Team/Team"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <Navbar />
      <Hero />
      <About />

      <Suspense fallback={<div style={{ height: "200px" }} />}>
        <Services />
        <Team />
        <Contact />
        <Footer onOpenLegal={() => setIsLegalOpen(true)} />
      </Suspense>

      <CookieBanner />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
      />
    </ErrorBoundary>
  );
}

export default App;
