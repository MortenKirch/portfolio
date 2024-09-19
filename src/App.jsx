import { useEffect } from 'react'; 
import './App.css'; 
import ForsideTekst from './components/ForsideTekst'; 
import ForsideCTA from './components/ForsideCTA'; 
import Navbar from './components/Navbar';
import ForsideH1 from './components/ForsideH1'; 
import Skills from './components/Skills'; 
import Fullimage from "./assets/morten-grandcanyon.png";
import Projects from './components/Projects';
import OmMorten from './components/OmMorten';
import KontaktFormular from './components/KontaktFormular'; 

function App() {
  // useEffect bruges her til at tilføje en animation, der gør, at elementer "fader ind", når de kommer i syne
  useEffect(() => {
    const getThreshold = () => {
      if (window.matchMedia("(max-width: 830px)").matches) {
        return 0.05; // Brug en større threshold for mindre skærme
      } else {
        return 0.1; // Standard threshold for større skærme
      }
    };
    
    // Vi laver en observer, som overvåger om elementerne (sektionerne) kommer ind på skærmen
    const observer = new IntersectionObserver(
      (entries) => {
        // Tjekker hvert element og ser, om det er synligt på skærmen
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hvis elementet er synligt, tilføjer vi klassen 'visible', som starter en fade-in effekt fra CSS
            entry.target.classList.add('visible');
          } else {
            // Hvis det går ud af synet, fjerner vi 'visible' så det kan fade ind igen, hvis man scroller op igen
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        // Definerer, hvor meget af elementet skal være synligt, før animationen starter
        threshold: getThreshold(),
      }
    );

    // Finder alle elementer, der skal fade ind (dem med klassen 'fade-in-section')
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((element) => observer.observe(element)); // Sætter observeren til at overvåge dem

    // Når komponenten fjernes, stopper vi observeren for at undgå problemer
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
   
      <div className="fade-in-section forside-tekst">
        <ForsideTekst />
      </div>

     
      <div className="fade-in-section CtaGrid" id="forside">
        <ForsideCTA />
      </div>

     
      <header className="fade-in-section header">
        <Navbar />
      </header>


      <div className="fade-in-section forside-h1">
        <ForsideH1 />
      </div>

    
      <div className="fade-in-section rolodex-container">
        <Skills />
      </div>

   
      <div className="fade-in-section full-image">
        <img src={Fullimage} alt="morten ved grand canyon" className='full-image-image' />
      </div>

  
      <div className="fade-in-section projekt-grid">
        <Projects />
      </div>


      <div className="fade-in-section" id="om-mig">
        <OmMorten />
      </div>


      <div className="fade-in-section kontakt-grid-2">
        <KontaktFormular />
      </div>
    </>
  );
}

export default App;
