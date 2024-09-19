import React, { useState, useEffect } from 'react';
// Importerer 'motion' fra 'framer-motion' biblioteket, som bruges til at lave animationer
import { AnimatePresence, motion } from 'framer-motion';

// Importerer billeder
import html from "../assets/icons/html.webp";
import css from "../assets/icons/css.webp";
import javascript from "../assets/icons/javascript.webp";
import react from "../assets/icons/react.webp";
import figma from "../assets/icons/figma.webp";
import illustrator from "../assets/icons/illustrator.webp";
import github from "../assets/icons/github.webp";
import photoshop from "../assets/icons/photoshop.webp";

const RolodexEffect = () => {
  // Opretter en state til at holde styr på, hvilket billede der vises for hvert sæt
  const [currentSets, setCurrentSets] = useState([0, 0, 0, 0]);

  // Array, der holder par af billeder, hvert par indeholder to billeder
  const imagePairs = [
    [html, javascript],
    [css, figma],
    [illustrator, photoshop],
    [react, github],
  ];

  // useEffect hook til at ændre billederne efter et bestemt interval
  useEffect(() => {
    // Sætter et interval for at ændre billederne
    const intervalId = setInterval(() => {
      // Itererer over hvert billedepar
      imagePairs.forEach((ignoredPair, pairIndex) => {
        // Forsinker billedskift for hvert kort så de ikke skifter samtidigt
        setTimeout(() => {
          // Opdaterer state for det specifikke kort, så det skifter billede
          setCurrentSets((prevSets) =>
            prevSets.map((setIndex, i) =>
              i === pairIndex ? (setIndex + 1) % 2 : setIndex
            )
          );
        }, pairIndex * 300); // Forsinkelse på 0,3 sekunder pr. kort
      });
    }, 6000); // Skifter billeder hvert 6. sekund

    // Rydder intervallet når komponenten unmountes
    return () => clearInterval(intervalId);
  }, [imagePairs]);

  return (
    <>
      {imagePairs.map((pair, pairIndex) => (
        <div key={pairIndex} className="rolodex-card">
          <div className="rolodex-flip">
            <AnimatePresence mode="sync">
              {/* Øverste halvdel af kortet */}
              <motion.div
                key={`top-${pairIndex}-${currentSets[pairIndex]}`}
                className="rolodex-image rolodex-image-top"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', // Definerer form på øverste del
                  backfaceVisibility: 'hidden', // Skjuler bagsiden af kortet under flip
                  
                }}
                transition={{
                  duration: 0.4, // Varighed af animationen
                  ease: 'easeInOut', // Blød overgang
                }}
                initial={{ rotateX: '0deg' }} // Startposition for øverste halvdel
                animate={{ rotateX: '0deg' }} // Slutposition for øverste halvdel (ingen rotation)
                exit={{ rotateX: '-180deg' }} // Animation, når elementet fjernes (roterer 180 grader)
              >
                {/* Billede for øverste del */}
                <img src={pair[currentSets[pairIndex]]} alt="Skills top icon" className='Skills-icon' />
              </motion.div>

              {/* Nederste halvdel af kortet */}
              <motion.div
                key={`bottom-${pairIndex}-${currentSets[pairIndex]}`}
                className="rolodex-image rolodex-image-bottom"
                style={{
                  clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)', // Definerer form på nederste del
                  backfaceVisibility: 'hidden', // Skjuler bagsiden under flip
                }}
                transition={{
                  
                  duration: 0.6, // Varighed af animationen
                  ease: 'easeInOut', // Blød overgang
                }}
                initial={{ rotateX: '180deg' }} // Startposition for nederste halvdel
                animate={{ rotateX: '0deg' }} // Slutposition for nederste halvdel (ingen rotation)
                exit={{ rotateX: '0deg' }} // Animation, når elementet fjernes (ingen rotation)
              >
                {/* Billede for nederste del */}
                <img src={pair[currentSets[pairIndex]]} alt="Skills bottom icon" className='Skills-icon' />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ))}
    </>
  );
};

export default RolodexEffect;
