import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import OurServices from './components/OurServices';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen font-sans bg-ivory">
      <Header />
      <Hero />
      <OurStory />
      <OurServices />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
