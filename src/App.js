import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImagePreloader from './components/ImagePreloader';

function App() {
  // Critical images to preload
  const criticalImages = [
    '/nishamamimg.jpeg'
  ];

  return (
    <div className="min-h-screen bg-white">
      <ImagePreloader images={criticalImages} />
      <Header />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;