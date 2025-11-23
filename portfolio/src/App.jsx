import "./App.css";
import { useState, lazy, Suspense } from "react";
import Preloader from "./components/Preloader";
import SEO from "./components/SEO";
import { ThemeProvider } from "./context/colorTheme";

// Lazy load components for better performance
const Header = lazy(() => import("./pages/Header"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Skills = lazy(() => import("./pages/Skills"));
const WorkExperience = lazy(() => import("./pages/Workexperience"));
const ContactForm = lazy(() => import("./pages/Contact"));
const Navbar = lazy(() => import("./pages/Navbar"));
const Footer = lazy(() => import("./pages/Footer"));
const MyProjects = lazy(() => import("./pages/Projects"));
const Intro = lazy(() => import("./pages/Intro"));
const ProfessionalCertificates = lazy(() => import("./pages/Procertificates"));
const EmailIcon = lazy(() => import("./pages/Email"));
const Education = lazy(() => import("./pages/Education"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      <SEO />
      {!loadingDone ? (
        <Preloader onFinish={() => setLoadingDone(true)} />
      ) : (
        <ThemeProvider>
          <Suspense fallback={<LoadingFallback />}>
            <Navbar />
            <Header />
            <Intro />
            <Testimonials />
            <Skills />
            <WorkExperience />
            <MyProjects />
            <ProfessionalCertificates />
            <Education />
            <ContactForm />
            <EmailIcon />
            <Footer />
          </Suspense>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
