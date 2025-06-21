import './App.css';
import { useState } from 'react';
import Preloader from './components/Preloader'; // Make sure the path is correct
import Header from './pages/Header';
import Testimonials from './pages/Testimonials';
import Skills from './pages/Skills';
import WorkExperience from './pages/Workexperience';
import ContactForm from './pages/Contact';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import MyProjects from './pages/Projects';
import Intro from './pages/Intro';
import ProfessionalCertificates from './pages/Procertificates';
import EmailIcon from './pages/Email';

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone ? (
        <Preloader onFinish={() => setLoadingDone(true)} />
      ) : (
        <>
          <Navbar />
          <Header />
          <Intro />
          <Testimonials />
          <Skills />
          <WorkExperience />
          <MyProjects />
          <ProfessionalCertificates />
          <ContactForm />
          <EmailIcon />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
