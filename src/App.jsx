import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Comparison from './components/comparison';
import Footer from './components/footer';
import './App.css';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import Education from './components/EDU';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <About />
      <Education />
      {/* <Services /> */}
      <Pricing />
      <Comparison />
      <SuccessStories />
      <Contact />
      <Footer />
    </>
  );
}

export default App;