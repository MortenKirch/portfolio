import closeup from "../assets/morten-closeup.png"
import arrow from "../assets/icons/circle-arrow-down-solid.svg"
export default function ForsideCTA(){

    return(
        <>
        
             <div className="ProjektCta">
            <h2>Se mine projekter</h2>

           
            <p>Mine projekter har været mange og har varieret efter opgavernes udforming</p>
            <a href="#projekter"><img src={arrow} alt="arrow down icon" className="arrowIcon"/></a>
            </div>
            <img src={closeup} alt="billede af Morten med cap"  className="forside-billede"/>
            <div className="KontaktCta">
                <h2>Kontakt mig</h2>
                <a href="#kontakt-mig" className="arrowtag"><img src={arrow} alt="arrow down icon" className="arrowIcon"/></a>
            </div>
        
        </>
    )
}