import './App.css'
import Header from './pages/Header'
import Testimonials from './pages/Testimonials'
import Skills from './pages/Skills'
import WorkExperience from './pages/Workexperience'
import ContactForm from './pages/Contact'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import MyProjects from './pages/Projects'
import Intro from './pages/Intro'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      <Testimonials />
      <Skills />
      <WorkExperience />
      <MyProjects />
      <ContactForm />
      <Footer />
    </>
  )
}



export default App
