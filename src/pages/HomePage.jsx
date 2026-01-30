import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Services from '../components/services';
import Comparison from '../components/comparison';
import Footer from '../components/footer';
import HowItWorks from '../components/HowItWorks';
import SuccessStories from '../components/SuccessStories';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <HowItWorks />
            <About />
            <Services />
            <Comparison />
            <SuccessStories />
            <Contact />
            <Footer />
        </>
    );
};

export default HomePage;
