import MortenRockTop from "../assets/morten-rock-top.png"
import MortenRockBottom from "../assets/morten-rock-bottom.png"
import instagram from "../assets/icons/instagram.webp"
import linkedin from "../assets/icons/linkedin.webp"

export default function OmMorten(){
    return(
        <>
                   
         <div className="image-slice-1">
            <img src={MortenRockTop} alt="" className="RockMorten" />
        </div>

        <div className="image-slice-2">
        <img src={MortenRockBottom} alt="" className="RockMorten" />
        </div>
        
            <div className="om-mig">
            <h2>Om mig</h2>
            <p>Når jeg ikke sidder foran computeren, elsker jeg at være ude i naturen og udforske verden.</p>
  
            <p>Blandandet gav et tre måneders roadtrip gennem USA mig en ny forståelse for naturens skønhed, og rejseoplevelser holder mig altid nysgerrig og åben for nye eventyr – både i den digitale og den virkelige verden.</p>
            <p>Gennem mit arbejde i det pædagogiske felt – hvor jeg har været ansat på bosted, i vuggestue og børnehave – har jeg opbygget stærke kompetencer inden for problemløsning, kommunikation og multitasking, hvilket jeg også har fundet værende en fordel for at holde hovedet koldt i den digitale verden.</p>
            <p>Foruden solo arbejde trives jeg fantastisk i teams, hvor samarbejde og klare mål er i fokus, og jeg forsøger altid at bringe min energi og positiv indstilling med til opgaverne.            </p>
        <div className="social-container">
        <a href="https://www.instagram.com/morten_kp/" target="_blank"><img src={instagram} alt="Instagram ikon" /></a>
        <a href="https://www.linkedin.com/in/morten-pedersen-2698811a9/" target="_blank"><img src={linkedin} alt="Linkedin ikon" /></a>
        </div>
        
        </div>



        </>
    )
};