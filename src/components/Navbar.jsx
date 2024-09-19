import React, { useState } from 'react';


export default function Navbar() {

    // Opretter en state variabel 'isMenuOpen' med en værdi af false
    // 'setIsMenuOpen' bruges til at opdatere denne state. 
    //Dette bruges til at styre, om menuen er åben eller lukket.
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Funktion, der skifter menuens åben/lukket tilstand. Hvis menuen er lukket,
    // åbner den, og hvis den er åben, lukkes den.
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>

        <div className="navbar">
            
      
            <p className="menu-text">Menu</p>
            
            {/* Menuikonet består af tre spans (linjer), og 'active' klassen tilføjes, 
            hvis 'isMenuOpen' er sand */}
            <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        
         
            <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
                <a href="#forside">Forside</a>
                <a href="#projekter">Projekter</a>
                <a href="#om-mig">Om mig</a>
                <a href="#kontakt-mig">Kontakt</a>
            </div>
        </div>
        </>
    );
};
