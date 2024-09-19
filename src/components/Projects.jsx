import React, { useState, useEffect } from 'react';
import arrow from "../assets/icons/arrow-right-solid.svg"; 

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('slide-in');
  const [isManualChange, setIsManualChange] = useState(false); // Sporer om skift er manuel

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  // Automatisk karusel-animationslogik
  useEffect(() => {
    if (isManualChange) return; // Stopper automatisk skift ved manuel skift

    const interval = setInterval(() => {
      setAnimationClass('slide-out');

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
        setCurrentTextIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
        setAnimationClass('slide-in');
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [projects, isManualChange]);

  const handleNext = () => {
    setIsManualChange(true); // Marker manuel skift
    setAnimationClass('slide-out');
    
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
      setCurrentTextIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
      setAnimationClass('slide-in');
    }, 1000);

    // Efter manuel skift, genstart automatisk skift efter en lille pause
    setTimeout(() => setIsManualChange(false),2000); // Forlæng intervallet lidt
  };

 

  if (projects.length === 0) return <div>Loading...</div>;

  const currentImageProject = projects[currentImageIndex];
  const currentTextProject = projects[currentTextIndex];

  return (
    <>
      {/* Tekst-karusel */}
      <div className="project-beskrivelse">
        <div className={`project-text-content ${animationClass}`}>
          <h2>{currentTextProject.title}</h2>
          <p>{currentTextProject.description}</p>
          <div className="project-icons-container">
            {currentTextProject.icons.map((icon, i) => (
              <img key={i} src={icon} alt="icon" className="project-icons" />
            ))}
          </div>
          <div className="project-links">
            {currentTextProject['direct-link'] && (
              <div className="live-demo">
                <a className='link-flex' href={currentTextProject['direct-link']} target="_blank">
                  <h3>Live-demo</h3>
                  <img src={arrow} alt="arrow solid" className="arrow-dem" />
                </a>
              </div>
            )}
            {currentTextProject.github && (
              <div className="github">
                <a className='link-flex' href={currentTextProject.github} target="_blank">
                  <h3>Github</h3>
                  <img src={arrow} alt="arrow solid" className="arrow-dem" />
                </a>
              </div>
            )}
          </div>
        </div>
                {/* Knapper til manuel skift */}
                <div className="carousel-button-div">
          <button className="next-button" onClick={handleNext}>
            <p>Se næste projekt</p>
            <img src={arrow} alt="arrow right"  className='arrow-dem'/>
          </button>
        </div>
      </div>

      {/* Billed-karusel */}
      <div className="project-image-container" id='projekter'>
        <div className={`project-image-content ${animationClass}`}>
          <img
            src={currentImageProject.image}
            alt={`billede af ${currentImageProject.title} projekt`}
            className="project-image"
          />
        </div>


      </div>

      <div className='kompetancer-grid'>
        <h2>Kompetancer</h2>
        <p>Som en ægte computernørd elsker jeg at nørkle med kode og skabe digitale løsninger, der gør en forskel, for både kunden og brugeren.</p>
        <p>Mine tekniske færdigheder inkluderer HTML, CSS, JavaScript og React. Herudover har jeg også erfaring med designværktøjer som Figma, Adobe Illustrator og Photoshop, samt Autodesk Maya og Procreate på et nysgerrig niveau. 
        </p>
        <p>Derudover har jeg tilegenet mig grundlæggende kendskab til GitHub Desktop.</p>
      </div>
    </>
  );
}
